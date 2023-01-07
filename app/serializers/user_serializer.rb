class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :major

  has_many :note_books
  has_many :notes
end