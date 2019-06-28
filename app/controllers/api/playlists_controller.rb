class Api::SessionsController < ApplicationController
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
        if @playlist.save
            render 'api/playlists/show'
        else
            render json: @playlist.errors.full_messages
        end
    end

    def destroy
        @playlist = Playlist.find_by(id: params[:id])
        Playlist.destroy(@playlist)
        render "api/playlists/show"
    end

    def playlist_params
        params.require(:playlist).permit(:name, :description) #owner_id from params?
    end
end
