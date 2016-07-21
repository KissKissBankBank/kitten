module Kitten
  module Molecules
    class SimulatorsController < Kitten::ApplicationController
      def show
        render template: "kitten/molecules/simulators/#{params[:name]}"
      end
    end
  end
end
