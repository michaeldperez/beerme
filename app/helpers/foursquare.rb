helpers do

  def get_fs_data
   response = HTTParty.get("https://api.foursquare.com/v2/venues/explore", query:{
    ll: latlon,
    query: 'beer',
    section: 'drinks',
    client_id: ENV['client_id'],
    client_secret: ENV['client_secret'],
    v: 20150403})
   response.body
  end

  def parse(json_obj)
    JSON.parse(json_obj)
  end

  def to_miles(meters)
    (meters*0.000621371192).round(2)
  end

  def venues(parsed_hash)
    parsed_hash["response"]["groups"][0]["items"].sort_by do |venue|
      to_miles(venue["venue"]["location"]["distance"])
    end
  end

  def latlon
    "#{session[:lat]},#{session[:lon]}"
  end

  def current_user
    @current_user ||= User.where(id: session[:id]).first if session[:id]
  end

end
