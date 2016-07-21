module Kitten
  module Molecules
    class FormController < Kitten::ApplicationController
      def show
        render template: "kitten/molecules/form/#{params[:name]}"
      end
    end
  end
end
