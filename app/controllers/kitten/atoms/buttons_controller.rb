module Kitten
  module Atoms

    class ButtonsController < ApplicationController
      def show
        render template: "atoms/buttons/#{params[:atom_name]}"
      end
    end
  end
end
