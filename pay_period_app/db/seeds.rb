# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(savings_target: 1000, age: 26, name: "Nick Lisauskas", goal_retirement_age: 50, net_worth: 110000)

Expense.create(description:"Alcohol", amount: 100, user_id: 1, category:"Food & Beverage")
Expense.create(description:"Alcohol", amount: 100, user_id: 1, category:"Food & Beverage")
Expense.create(description:"Alcohol", amount: 100, user_id: 1, category:"Food & Beverage")

Income.create(description:"Paycheck", amount: 2400, user_id: 1, category:"Salary")
Income.create(description:"Reimbursement", amount: 100, user_id: 1, category:"Miscellaneous")
