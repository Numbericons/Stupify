class Api::SongsController < ApplicationController
    def index
        @songs = Song.all
        render :index
    end
    
    def show
        @song = Song.find_by(id: params[:id])
        render :show
    end
end