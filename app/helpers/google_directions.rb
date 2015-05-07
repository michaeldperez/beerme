helpers do

  def get_directions(destination)
    response = HTTParty.get("http://maps.googleapis.com/maps/api/directions/json", query:{
        origin: latlng,
        destination: destination,
        key: ENV['direc_key']
      })
    response.body
  end

  def latlng
    "#{session[:lat]}#{session[:lon]}"
  end

end