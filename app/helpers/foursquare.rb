helpers do
  def get_fs_data
   # HTTParty.get("https://api.foursquare.com/v2/venues/explore?ll=#{latlon}&query=beer&section=drinks&client_id=#{ENV['client_id']}&client_secret=#{ENV['client_secret']}&v=20150403")

   HTTParty.get("https://api.foursquare.com/v2/venues/explore?ll=37.7843667,-122.39709250000001&query=beer&section=drinks&client_id=XFMFMCH3CTS0SLTMBQ2KDTFHVJFNPWEPIQU151PPJF5RUZAF&client_secret=NIIUDV3OY5UE5TGZBODQRPS351IVGW5532CV5E4QCQ1VU4CH&v=20150403")
  end

  def latlon
    "#{session[:lat]},#{session[:lon]}"
  end

end
