# Write a function that sums up integers from a text file, one int per line.

# First need a line reader
# Usage: run ruby ruby.rb somefile.txt


lines = [];

ARGF.each do |line|
  lines.push(line.to_i)
end

# p lines
p lines.sum
