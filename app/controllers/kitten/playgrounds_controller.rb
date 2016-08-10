module Kitten
  class PlaygroundsController < Kitten::ApplicationController
    def show
      render template: "layouts/kitten/playground"
    end
  end
end
