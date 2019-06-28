class Api::SonglistsController < ApplicationController
    def create
        @songlist = Songlist.new
        @songlist.song_id = params[:song_id]
        @songlist.playlist_id = params[:playlist_id]
        if @songlist.save
            render "api/songs/show"
        else
            render json: @songlist.errors.full_messages, status: 422
        end
    end

    def destroy
        @songlist = Songlist.find_by(id: params[:id])
        Songlist.destroy(@songlist.id) if @songlist
        render "api/playlists/show"
    end
end