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
  @user = User.new(params[:user])
  if @user.save
    session[:id] = @user.id
    redirect '/profile'
  else
    @errors = @user.errors.full_messages.to_sentence
    erb :index
  end
end

post '/login' do
  @user = User.where(email: params[:email]).first
  if @user && @user.authenticate(params[:password])
    session[:id] = @user.id
    redirect "/profile"
  else
    @errors = "Could not find account or/ email did not match account"
    erb :index
  end
end


# longitude: -122.39709250000001

# Latitude: 37.7843667