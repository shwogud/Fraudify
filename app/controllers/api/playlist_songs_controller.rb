class Api::PlaylistSongsController < ApplicationController
  def create
    
    @playlist_song = PlaylistSong.new(playlist_song_params)
    if @playlist_song.save
      render "api/playlist_songs/show"
    else
      render json: @playlist_song.errors.full_messages
    end
  end

  def show
    @playlist_song = PlaylistSong.find_by(id: params[:id])
    if @playlist_song
      render "api/playlist_songs/show"
    else
      render json: @playlist_songs.errors.full_messages
    end
  end

  def destroy
    @playlist_song = PlaylistSong.find_by(
      playlist_id: params[:playlist_song][:playlist_id],
      song_id: params[:playlist_song][:song_id],
    )
    # @playlist = Playlist.find(params[:playlist_song][:playlist_id]);
    if @playlist_song
      @playlist_song.destroy 
    else
      render @playlist_song.errors.full_messages;
    end

  end

  private
  def playlist_song_params
    params.require(:playlist_song).permit(:playlist_id, :song_id)
  end
  
end
