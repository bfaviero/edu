class Course < ActiveRecord::Base
 	validates :name, presence: true
 	has_many :registrations
 	has_many :users, :through => :registrations
 	
end
