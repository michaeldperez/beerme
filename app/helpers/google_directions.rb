helpers do

  def get_directions(origin, destination)
    response = HTTParty.get("http://maps.googleapis.com/maps/api/directions/json", query:{
        origin:,
        destination:,
        key: ENV['direc_key']
      })
    response.body
  end

end