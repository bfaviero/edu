class CourseController < ApplicationController
  before_filter :signed_in_user, only: [:create, :destroy]
  def index
    @courses = Course.find(1)
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