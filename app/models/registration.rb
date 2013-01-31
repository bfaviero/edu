class Registration < ActiveRecord::Base
  attr_accessible :course, :user
  belongs_to :user
  belongs_to :course
end
