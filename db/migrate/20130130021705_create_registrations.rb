class CreateRegistrations < ActiveRecord::Migration
  def change
    create_table :registrations do |t|
      t.string :user
      t.string :course

      t.timestamps
    end
  end
end
