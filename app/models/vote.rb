class Vote < ActiveRecord::Base
  attr_accessible :course, :user, :value, :when

  belongs_to :user
  belongs_to :course
end
