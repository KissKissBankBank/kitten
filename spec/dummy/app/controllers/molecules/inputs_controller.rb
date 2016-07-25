module Molecules
  # Render inputs examples.
  class InputsController < ApplicationController
    def show
      render template: "molecules/inputs/#{params[:molecule_name]}"
    end
  end
end
