class AddColumnsToContactsTable < ActiveRecord::Migration
  def change
  	add_column :contacts, :name, :string
  	add_column :contacts, :email, :string
  	add_column :contacts, :message, :text
  end
end
