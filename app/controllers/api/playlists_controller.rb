class Api::PlaylistsController < ApplicationController
    def show
        @playlist = Playlist.find_by(id: params[:id])
        render :show
    end

    def index
        @playlists = Playlist.all
        render :index
    end

    def create
        @playlist = Playlist.new(playlist_params)
        @playlist.owner_id = current_user.id
        if @playlist.save
            render 'api/playlists/show'
        else
            render json: @playlist.errors.full_messages
        end
    end

    def destroy
        playlist = Playlist.find_by(id: params[:id])
        Playlist.destroy(playlist.id) if playlist
        @playlists = Playlist.all
        render "api/playlists/index"
    end

    def playlist_params
        params.require(:playlist).permit(:name) #owner_id from params?
    end
end
