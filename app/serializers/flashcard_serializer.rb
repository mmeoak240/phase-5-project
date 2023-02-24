class FlashcardSerializer < ActiveModel::Serializer
  attributes :id, :tab, :front, :back, :note_book_id #, :user_id

  # belongs_to :user
  belongs_to :note_book
end
