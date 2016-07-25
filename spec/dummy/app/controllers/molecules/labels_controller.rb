module Molecules
  # Render labels examples.
  class LabelsController < ApplicationController
    def show
      render template: "molecules/labels/#{params[:molecule_name]}"
    end
  end
end
