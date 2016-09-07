module Kitten
  class BrandingController < Kitten::ApplicationController
    def index
      render template: "layouts/kitten/branding",
             layout: "kitten/application"
    end
  end
end
