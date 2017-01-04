module Kitten
  class UtilitiesController < Kitten::ApplicationController
    def index
      render template: "layouts/kitten/utilities",
             layout: "kitten/application"
    end
  end
end
