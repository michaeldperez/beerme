get '/' do
  @user = User.new
  erb :index
end

post '/login' do
  content_type :json
  @user = User.where(email: params[:user][:email]).first
  if @user && @user.authenticate(params[:user][:password])
    session[:id] = @user.id
    session[:lon] = params[:lon]
    session[:lat] = params[:lat]
    { redirect: "/users/#{@user.id}" }.to_json # changed from /profile
  else
    status 400
    { errors: "Could not find account, or email did not match account" }.to_json
  end
end

get '/logout' do
  session.delete(:id)
  session.delete(:lon)
  session.delete(:lat)
  redirect '/'
end

get '/location' do
  content_type :json
  { startLat: session[:lat], startLon: session[:lon] }.to_json
end

post '/users' do
  content_type :json
  @user = User.new(params[:user])
  if @user.save
    session[:id] = @user.id
    session[:lon] = params[:lon]
    session[:lat] = params[:lat]
    { redirect: "/users/#{@user.id}" }.to_json # changed from /profile
  else
    status 400
    { errors: @user.errors.full_messages }.to_json
  end
end

get '/users/:id' do # changed from /profile
  @user = User.find(session[:id])
  # p venues(parse(get_fs_data))
  erb :profile
end

get '/users/:id/favorites' do # changed from /:id/favorites
  @user = User.find(params[:id])
  erb :favorites
end

post '/users/:id/favorites' do #changed from /profile
  content_type :json
  @user = current_user
  favorite = Favorite.new
  favorite.venue = params[:venue]
  favorite.phone = params[:phone]
  favorite.address = params[:address]
  favorite.url = params[:url]
  if favorite.save
    @user.favorites << favorite
    { venue: favorite.venue, redirect: "/users/#{@user.id}" }.to_json #changed from /profile
  else
    status 400
    { errors: "Venue could not be saved." }.to_json
  end
end

delete '/users/:user_id/favorites/:favorites_id' do # changed from users/:id/favorites/:id
  content_type :json
  if request.xhr?
    favorite = Favorite.find(params[:id])
    favorite.destroy
    { id: favorite.id }.to_json
  else
    status 400
    { errors: "Selected favorite could not be removed."}.to_json
  end
end

