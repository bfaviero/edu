class Course < ActiveRecord::Base
	attr_accessible :name, :creator, :students
 	validates :name, presence: true

 	has_many :registrations
 	has_many :users, :through => :registrations
 	has_many :votes
 	
end
