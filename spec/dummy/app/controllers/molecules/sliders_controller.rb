module Molecules
  # Render sliders examples.
  class SlidersController < ApplicationController
    def show
      render template: "molecules/sliders/#{params[:molecule_name]}"
    end
  end
end
