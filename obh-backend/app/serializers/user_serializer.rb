class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :acount
end
