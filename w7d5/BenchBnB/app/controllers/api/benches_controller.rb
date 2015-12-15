  class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds], params[:min], params[:max])
    render :index
  end

  def create
    @bench = Bench.create!(bench_params)
    render :show
  end

  def show
    @bench = Bench.find(params[:id])
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating)
  end
end
