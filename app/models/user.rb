# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    after_initialize :ensure_session_token
    attr_reader :password

    has_many :playlists,
    foreign_key: :owner_id,
    class_name: 'Playlist'

    def self.find_by_credentials(field, password)
        user = User.find_by(username: field) || User.find_by(email: field)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end
    
    private

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def generate_session_token
        SecureRandom.urlsafe_base64
    end

    def guarantee_unique_session_token
        self.session_token = generate_session_token

        while User.find_by(session_token: self.session_token)
            self.session_token = generate_session_token
        end
        self.session_token
    end
end
