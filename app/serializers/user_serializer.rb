class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :major

  has_many :note_books, through: :notes
  has_many :notes
end