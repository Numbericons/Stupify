class Api::SonglistsController < ApplicationController
    def create
        @songlist = Songlist.new
        @songlist.song_id = params[:song_id]
        @songlist.playlist_id = params[:playlist_id]
        # debugger
        if @songlist.save
            render json: @songlist.playlist_id
            # render "api/songs/show"
        else
            render json: @songlist.errors.full_messages, status: 422
        end
    end
    
    def destroy
        songlist_id = Songlist.find_by_credentials(params[:id], params['song_id'])
        if songlist_id
            Songlist.destroy(songlist_id)
            render json: params[:id]
        else
            render json: ['failure!']
        end
        # @songlist = Songlist.find_by(playlist_id: params[:id])
        # if @songlist && @songlist.song_id.to_s == params['song_id']
        #     Songlist.destroy(@songlist.id)
        #     render json: @songlist.playlist_id
        # else
        #     render json: ['failure!']
        # end
    end
end