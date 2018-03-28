class EggsController < ApplicationController
  def index
    @eggs = Egg.all
  end

  def new
    @egg = Egg.new
  end

  def create
    egg = Egg.create egg_params
    redirect_to eggs_path
  end

  def destroy
    egg = Egg.find params[:id]
    egg.destroy
    redirect_to eggs_path
  end

  def edit
    @egg = Egg.find params[:id]
  end

  def update
    egg = Egg.find params[:id]
    egg.update egg_params
    redirect_to egg
  end

  def show
    @egg = Egg.find params[:id]
  end

private
def egg_params
  params.require(:egg).permit(:name, :pattern, :image, :bird_id)
end


end
