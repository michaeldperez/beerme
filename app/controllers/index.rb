get '/' do
  erb :index
end

post '/users/new' do

  @new_user = User.new(params[:user])
  if @new_user.save
    session[:id] = @new_user.id
    redirect '/users/:id'
  else
    @errors = @new_user.errors.full_messages.to_sentence
    erb :index
  end

end

post '/' do
 redirect '/'
end

# longitude: -122.39709250000001

# Latitude: 37.7843667