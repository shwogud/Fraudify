class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist
    .includes(:songs)
    .includes(:user)
    .with_attached_photo
  end

  def create
    @playlist = Playlist.new(playlist_params)
    
    @playlist.user_id = current_user.id  #params[:user_id]
    if @playlist.save
      render "api/playlists/show"
    else
      render json: @playlist.errors.full_messages
    end
  end


  def show
   @playlist = Playlist.find_by(id: params[:id])
   if @playlist
    render "api/playlists/show"
   else
    render json: ['Playlist cannot be found']
   end
  end


  def destroy
    @playlist = Playlist.find(params[:id])

    if @playlist 
      @playlist.destroy 
    else
      render json: ['Playlist cannot be found']
    end
  end

  private
  def playlist_params
    params.require(:playlist).permit(:title, :user_id)
  end
end