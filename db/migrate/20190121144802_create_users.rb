class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false, unique: true
      t.string :session_token, null: false
      t.string :img_url
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
  end
end
