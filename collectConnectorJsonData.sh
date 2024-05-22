#!/bin/bash

# Set the output file name
output_file="all_data.json"

# Initialize an empty array
data_array=()

# Loop through all JSON files in the current directory
for file in */*.json; do
  # Read the contents of the JSON file
  data=$(cat "$file")

  # Add the contents to the array
  data_array+=("$data")
done

# Combine the array elements into a single JSON string
json_string=$(printf ",%s" "${data_array[@]}")

# Remove the leading comma
json_string=${json_string:1}

# Write the JSON string to the output file
echo "[$json_string]" > "$output_file"