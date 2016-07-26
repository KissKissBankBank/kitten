module Kitten
  module Atoms
    class TypographyController < Kitten::ApplicationController
      def show
        render template: "kitten/atoms/typography/#{params[:name]}"
      end
    end
  end
end
