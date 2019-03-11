class Api::AlbumsController < ApplicationController
  def index
    @albums = Album
    .includes(:artist)
      .includes(:songs)
      .with_attached_photo
  end

  def show
    @album = Album.find_by(id: params[:id])
    if @album
      render "api/albums/show"
    else
      render json: @album.errors.full_messages
    end
  end

  
end
