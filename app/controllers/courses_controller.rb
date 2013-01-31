class CoursesController < ApplicationController
  before_filter :signed_in_user, only: [:create, :destroy]
  def show
    @course = Course.find(params[:id])
  end

  def index
    
  end
  def create
    @course = current_user.courses.build(params[:course])
    if @course.save
      flash[:success] = "Course created!"
      redirect_to root_url
    else
      render 'static_pages/home'
    end
  end

  def destroy
  end



end