helpers do

  def get_directions(destination)
    response = HTTParty.get("https://maps.googleapis.com/maps/api/directions/json", query:{
        origin: origin,
        destination: destination,
        key: ENV['direc_key']
      })
    response.body
  end

  def origin
    "#{session[:lat]},#{session[:lon]}"
  end

  # def destination(coordinates)
  #   "#{coordinates[:dlat]},#{coordinates[:dlon]}"
  # end

  def directions_list(directions)
    route = directions["routes"][0]["legs"][0]
    start_address = route["start_address"]
    end_address = route["end_address"]
    instructions = {
      "start_address" => start_address,
      "end_address" => end_address,
    }
    route["steps"].each_with_index do |step, index|
      instructions["#{index+1}"] = step["html_instructions"]
    end
    instructions
  end

end