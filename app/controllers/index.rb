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

post '/users' do
  content_type :json
  @user = User.new(params[:user])
  if @user.save
    session[:id] = @user.id
    session[:lon] = params[:lon]
    session[:lat] = params[:lat]
    {redirect: "/profile"}.to_json
  else
    status 400
    { errors: @user.errors.full_messages }.to_json
  end
end

post '/login' do
  content_type :json
  @user = User.where(email: params[:email]).first
  if @user && @user.authenticate(params[:password])
    session[:id] = @user.id
    session[:lat] = params[:lat]
    session[:lon] = params[:lon]
    {redirect: "/profile"}.to_json
  else
    status 400
    { errors: "Could not find account, or email did not match account" }.to_json
  end
end


# longitude: -122.39709250000001

# Latitude: 37.7843667