module Kitten
  module Organisms
    class SimulatorsController < Kitten::ApplicationController
      def show
        render template: "kitten/organisms/simulators/#{params[:name]}"
      end
    end
  end
end
