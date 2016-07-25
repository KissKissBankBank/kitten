module Atoms
  # Render form examples.
  class FormController < ApplicationController
    def show
      render template: "atoms/form/#{params[:atom_name]}"
    end
  end
end
