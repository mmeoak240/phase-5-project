class AddNoteBookIdToNotes < ActiveRecord::Migration[6.1]
  def change
    add_column :notes, :note_book_id, :integer
  end
end
