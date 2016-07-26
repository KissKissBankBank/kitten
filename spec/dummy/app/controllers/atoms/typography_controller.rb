module Atoms
  # Render typography examples.
  class TypographyController < ApplicationController
    def show
      render template: "atoms/typography/#{params[:name]}"
    end
  end
end
