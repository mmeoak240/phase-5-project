class CreateNoteBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :note_books do |t|
      t.string :subject
      t.string :cover
      t.timestamps
    end
  end
end
