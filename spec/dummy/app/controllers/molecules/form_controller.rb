module Molecules
  # Render form examples.
  class FormController < ApplicationController
    def show
      render template: "molecules/form/#{params[:name]}"
    end
  end
end
