module Molecules
  # Render simulators examples.
  class SimulatorsController < ApplicationController
    def show
      render template: "molecules/simulators/#{params[:molecule_name]}"
    end
  end
end
