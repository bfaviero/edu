class Course < ActiveRecord::Base
	attr_accessible :name, :creator, :students
 	validates :name, presence: true
 	has_and_belongs_to_many :users
 	
end
