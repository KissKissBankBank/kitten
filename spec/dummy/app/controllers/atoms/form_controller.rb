module Atoms
  # Render form examples.
  class FormController < ApplicationController
    def show
      render template: "atoms/form/#{params[:name]}"
    end
  end
end
