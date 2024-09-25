class SchedulesController < ApplicationController
  protect_from_forgery
  def index
    @schedules = Schedule.all
  end

  def new
    @schedule = Schedule.new
  end

  def create
    @schedule = Schedule.new(params.require(:schedule).permit(:id, :title, :start_date, :end_date, :all_day, :memo))
    if @schedule.save
      flash[:notice] = "スケジュールを登録しました"
      redirect_to schedules_path
    else
      flash[:alert] = "スケジュールを登録できませんでした"
      render "new"
    end
  end

  def show
    @schedule = Schedule.find(params[:id])
  end

  def edit
    @schedule = Schedule.find(params[:id])
  end

  def update
    @schedule = Schedule.find(params[:id])
    if @schedule.update(params.require(:schedule).permit(:title, :start_date, :end_date, :all_day, :memo))
      flash[:notice] = "スケジュールを更新しました"
      redirect_to schedules_path
    else
      flash[:alert] = "スケジュールを更新できませんでした"
      render "edit"
    end
  end

  def destroy
    @schedule = Schedule.find(params[:id])
    if @schedule.destroy
      flash[:notice] = "スケジュールを削除しました"
      redirect_to schedules_path
    else
      flash[:alert] = "スケジュールを削除できませんでした"
      redirect_to schedules_path
    end
  end
end
