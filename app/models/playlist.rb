# == Schema Information
#
# Table name: playlists
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  validates :title, presence: true

  belongs_to :user
  has_many :playlist_songs
  has_many :songs, through: :playlist_songs

  has_one_attached :photo
end
