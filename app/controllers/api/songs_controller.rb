class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
  end

  def show
    @song = Song.find_by(id: params[:id])
    if @song
      render 'api/songs/show'
    else
      render json: @song.errors.full_messages
    end
  end

  def whole_song_show
    
    @song = Song.find_by(id: params[:id])
    
    if @song 
      render :whole_song 
    else
      render json: ["Song does not exist!"]
    end
  end

  
end
