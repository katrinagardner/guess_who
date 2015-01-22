require "HTTParty"

puts "Please enter IP address"

address = gets.chomp
#local_url = "http://localhost:3000/"
response = HTTParty.get(address)

puts response

answer = true
while answer
  puts "Which celebrity might this be?"
  celebrity = gets.chomp

  response_1 = HTTParty.get("#{address}/#{celebrity}")

  if response_1['correct']
    puts response_1['correct']
    answer = false
  else response_1['incorrect']
    puts response_1['incorrect']
    answer = true
  end

end
