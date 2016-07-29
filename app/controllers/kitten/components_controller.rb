module Kitten
  class ComponentsController < Kitten::ApplicationController
    def show
      render template: "layouts/kitten/components",
             layout: "kitten/application"
    end
  end
end
