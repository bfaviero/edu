class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.string :user
      t.string :course
      t.integer :value
      t.datetime :when

      t.timestamps
    end
  end
end
