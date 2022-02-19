class AccountSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :email, :password_digest
end
