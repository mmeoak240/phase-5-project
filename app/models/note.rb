class Note < ApplicationRecord
  validates :content, presence: true
  validates :tab, presence: true

  belongs_to :user
  belongs_to :note_book

  
  accepts_nested_attributes_for :note_book, :reject_if => :all_blank
end
