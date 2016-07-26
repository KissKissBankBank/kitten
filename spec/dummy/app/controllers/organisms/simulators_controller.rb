module Organisms
  # Render simulators examples.
  class SimulatorsController < ApplicationController
    def show
      render template: "organisms/simulators/#{params[:name]}"
    end
  end
end
