module Molecules
  # Render form examples.
  class FormController < ApplicationController
    def show
      render template: "molecules/form/#{params[:molecule_name]}"
    end
  end
end
