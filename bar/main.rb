require 'faraday'

URL = "http://#{ENV["HOST"]}:#{ENV["PORT"]}"

response = Faraday.get "#{URL}/greeting?hello,world"

puts response.body