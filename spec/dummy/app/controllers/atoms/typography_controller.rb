module Atoms
  class TypographyController < ApplicationController
    def show
      render template: "atoms/typography/#{params[:atom_name]}"
    end
  end
end
