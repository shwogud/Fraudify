class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist
      .includes(:albums)
      .includes(:songs)
      .with_attached_photo
  end

  def show
    @artist = Artist.find_by(id: params[:id])
    if @artist 
      render "api/artists/show"
    else
      render json: @artist.errors.full_messages
    end
  end

  
end
