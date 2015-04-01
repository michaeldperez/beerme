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
    parsed_hash["response"]["groups"][0]["items"]
  end

  def latlon
    "#{session[:lat]},#{session[:lon]}"
  end

end

# HTTParty.get("https://api.foursquare.com/v2/venues/explore?ll=37.7843667,-122.39709250000001&query=beer&section=drinks&client_id=XFMFMCH3CTS0SLTMBQ2KDTFHVJFNPWEPIQU151PPJF5RUZAF&client_secret=NIIUDV3OY5UE5TGZBODQRPS351IVGW5532CV5E4QCQ1VU4CH&v=20150403")

# info = parse(get_fs_data)
# p info["response"]["groups"][0]["items"][x] where x is hash that includes venue

# info = parse(get_fs_data)
# test_data = info["response"]["groups"][0]["items"][0]["venue"]
# p "name: #{test_data["name"]}"
# p "phone: #{test_data["contact"]["formattedPhone"]}"
# p "location: #{test_data["location"]["formattedAddress"].join(", ")}"
# p "distance: #{test_data["location"]["distance"]*0.000621371192} miles"
# p "people here now: #{test_data["hereNow"]["summary"]}"
# p "URL: #{test_data["url"]}"

# 21st Amendment Example:
# info = parse(get_fs_data)
# test_data = info["response"]["groups"][0]["items"][0]["venue"]
# p "name: #{test_data["name"]}"
# p "phone: #{test_data["contact"]["formattedPhone"]}"
# p "location: #{test_data["location"]["formattedAddress"].join(", ")}"
# p "distance: #{to_miles(test_data["location"]["distance"])} miles"
# p "people here now: #{test_data["hereNow"]["summary"]}"
# p "URL: #{test_data["url"]}"