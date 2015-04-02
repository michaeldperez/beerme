get '/' do
  @user = User.new
  erb :index
end

get '/profile' do
  @user = User.find(session[:id])
  erb :profile
end

get '/logout' do
  session.clear
  redirect '/'
end

get '/:id/favorites' do
  @user = User.find(params[:id])
  erb :favorites
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
  p params
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
