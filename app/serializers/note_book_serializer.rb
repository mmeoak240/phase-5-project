class NoteBookSerializer < ActiveModel::Serializer
  attributes :id, :subject, :cover, :notes, :users
  has_many :notes
  has_many :users, through: :notes
end
