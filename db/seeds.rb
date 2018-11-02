# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Tester01", name: "Tester", email: "tester01@gmail.com", password: "test")
User.create(username: "Taffy", name: "Taffy", email: "taffy@gmail.com", password: "1234")

Fund.create(symbol: "AAPL", company: "Apple Inc.", sector: "Technology", price: 213.06)
Fund.create(symbol: "AMZN", company: "Amazon.com Inc.", sector: "Consumer Cyclical", price: 1665.53)
Fund.create(symbol: "GOOG", company: "Alphabet Inc.", sector: "Technology", price: 1070)
Fund.create(symbol: "FB", company: "Facebook Inc.", sector: "Consumer Cyclical", price: 151.75)
Fund.create(symbol: "TWTR", company: "Twitter Inc.", sector: "Consumer Cyclical", price: 34.62)

Investment.create(quantity: 5, price: 200, user_id: 2, fund_id: 1)
Investment.create(quantity: 10, price: 1000, user_id: 2, fund_id: 3)
Investment.create(quantity: 15, price: 35, user_id: 2, fund_id: 5)
