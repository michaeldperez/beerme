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

  def destination(coordinates)
    "#{coordinates[:dlat]},#{coordinates[:dlon]}"
  end

end