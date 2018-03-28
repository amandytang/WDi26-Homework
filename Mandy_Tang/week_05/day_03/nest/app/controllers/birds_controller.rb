class BirdsController < ApplicationController
  def index
    @birds = Bird.all
  end

  def new
    @bird = Bird.new
  end

  def create
    bird = Bird.create bird_params
    redirect_to birds_path
  end

  def destroy
    bird = Bird.find params[:id]
    bird.destroy
    redirect_to birds_path
  end

  def edit
    @bird = Bird.find params[:id]
    
  end

  def update
    bird = Bird.find params[:id]
    bird.update bird_params
    redirect_to bird
  end

  def show
    @bird = Bird.find params[:id]
  end

def bird_params
  params.require(:bird).permit(:name, :species, :colour, :image)
end


end
