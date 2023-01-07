class NoteSerializer < ActiveModel::Serializer
  attributes :id, :tab, :content, :user_id, :note_book_id
  belongs_to :user
  belongs_to :note_book
end
