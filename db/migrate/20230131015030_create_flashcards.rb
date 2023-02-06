class CreateFlashcards < ActiveRecord::Migration[6.1]
  def change
    create_table :flashcards do |t|
      t.string :tab
      t.string :front
      t.string :back
      t.string :image

      t.timestamps
    end
  end
end
