module Kitten
  module Atoms
    class FormController < Kitten::ApplicationController
      def show
        render template: "kitten/atoms/form/#{params[:name]}"
      end
    end
  end
end
