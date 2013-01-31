class Vote < ActiveRecord::Base
  attr_accessible :course, :user, :value, :when
end
