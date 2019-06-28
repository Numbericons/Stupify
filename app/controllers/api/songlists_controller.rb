class Api::SonglistsController < ApplicationController
    def create
        @songlist = Songlist.new
        @songlist.song_id = params[:songlist][:song_id]
        @songlist.playlist_id = params[:songlist][:playlist_id]
        # debugger
        if @songlist.save
            render json: [@songlist]
            # render "api/songs/show"
        else
            render json: @songlist.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @songlist = Songlist.find_by(id: params[:id])
        if @songlist
            Songlist.destroy(@songlist.id)
            render json: ['success!']
        else
            render json: ['failure!']
        end
    end
end