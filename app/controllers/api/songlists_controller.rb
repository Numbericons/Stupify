class Api::SonglistsController < ApplicationController
    def create
        @songlist = Songlist.new
        @songlist.song_id = params[:song_id]
        @songlist.playlist_id = params[:playlist_id]
        if @songlist.save
            render json: @songlist.playlist_id
            # render "api/songs/show"
        else
            render json: @songlist.errors.full_messages, status: 422
        end
    end
    
    def destroy
        songlist = Songlist.find_by_credentials(params[:id], params['song_id'])
        if songlist
            Songlist.destroy(songlist.id)
            render json: params[:id]
        else
            render json: ['failure!']
        end
    end
end