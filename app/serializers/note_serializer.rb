class NoteSerializer < ActiveModel::Serializer
  attributes :id, :tab, :content, :note_book_id#, :user_id,
  # belongs_to :user
  belongs_to :note_book
end


