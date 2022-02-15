class CreateFavoritedContents < ActiveRecord::Migration[6.1]
  def change
    create_table :favorited_contents do |t|
      t.integer :user_id
      t.integer :content_id

      t.timestamps
    end
  end
end
