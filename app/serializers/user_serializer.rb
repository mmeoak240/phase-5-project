class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :major

  has_many :notes
  has_many :note_books, through: :notes
end