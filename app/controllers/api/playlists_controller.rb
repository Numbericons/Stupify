class Api::SessionsController < ApplicationController
    def show
    end

    def index
    
    end

    def create
    end

    def destroy
    
    end

    def playlist_params
        params.require(:playlist).permit(:name, :description) #owner_id from params?
    end
end
