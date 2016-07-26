module Atoms
  # Render buttons examples.
  class ButtonsController < ApplicationController
    def show
      render template: "atoms/buttons/#{params[:name]}"
    end
  end
end
