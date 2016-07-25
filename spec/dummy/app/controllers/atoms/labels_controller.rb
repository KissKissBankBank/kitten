module Atoms
  # Render labels examples.
  class LabelsController < ApplicationController
    def show
      render template: "atoms/labels/#{params[:atom_name]}"
    end
  end
end
