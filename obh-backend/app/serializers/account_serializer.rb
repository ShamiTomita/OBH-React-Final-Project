class AccountSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :email 
end
