class AddNotebookIdToFlashcards < ActiveRecord::Migration[6.1]
  def change
    add_column :flashcards, :note_book_id, :integer
  end
end
