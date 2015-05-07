get '/' do
  @user = User.new
  erb :index
end

get '/profile' do # Should be users/:id
  @user = User.find(session[:id])
  # p venues(parse(get_fs_data))
  erb :profile
end

get '/logout' do
  session.delete(:id)
  session.delete(:lon)
  session.delete(:lat)
  redirect '/'
end

get '/:id/favorites' do # Should be users/:id/favorites
  @user = User.find(params[:id])
  erb :favorites
end

post '/directions' do
  content_type :json
  # p origin
  # p destination(params[:destination])
  # p parse(get_directions(destination(params[:destination])))
  p directions_list(parse(get_directions(params[:address])))
end

post '/users' do
  content_type :json
  @user = User.new(params[:user])
  if @user.save
    session[:id] = @user.id
    session[:lon] = params[:lon]
    session[:lat] = params[:lat]
    { redirect: "/profile" }.to_json
  else
    status 400
    { errors: @user.errors.full_messages }.to_json
  end
end

post '/profile' do
  content_type :json
  @user = current_user
  favorite = Favorite.new
  favorite.venue = params[:venue]
  favorite.phone = params[:phone]
  favorite.address = params[:address]
  favorite.url = params[:url]
  if favorite.save
    @user.favorites << favorite
    { redirect: "/profile" }.to_json
  else
    status 400
    { errors: "Venue could not be saved." }.to_json
  end
end

post '/login' do
  content_type :json
  @user = User.where(email: params[:user][:email]).first
  if @user && @user.authenticate(params[:user][:password])
    session[:id] = @user.id
    session[:lon] = params[:lon]
    session[:lat] = params[:lat]
    { redirect: "/profile" }.to_json
  else
    status 400
    { errors: "Could not find account, or email did not match account" }.to_json
  end
end

delete '/favorites/:id' do # Should be users/:id/favorites/:id
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

