class AddUserIdToFlashcards < ActiveRecord::Migration[6.1]
  def change
    add_column :flashcards, :user_id, :integer
  end
end
