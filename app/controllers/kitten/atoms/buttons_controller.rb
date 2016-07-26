module Kitten
  module Atoms
    class ButtonsController < Kitten::ApplicationController
      def show
        render template: "kitten/atoms/buttons/#{params[:name]}"
      end
    end
  end
end
