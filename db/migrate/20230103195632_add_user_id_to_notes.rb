class AddUserIdToNotes < ActiveRecord::Migration[6.1]
  def change
    add_column :notes, :user_id, :integer
  end
end
