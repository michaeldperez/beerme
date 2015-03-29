class User < ActiveRecord::Base
  include BCrypt

  has_many :favorites

  validates :first_name, :last_name, :email, :password_hash, { presence: true }
  validates :email, { uniqueness: true }
  validate :correct_email_format

  def password
    @password ||= Password.new(password_hash)
  end

# setter method:
  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end

  def authenticate(input_password)
    self.password == input_password
  end

  def correct_email_format
    self.errors.add :base, "Incorrect email address format" unless /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i.match(self.email)
  end


end
