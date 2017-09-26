module Kitten
  class AboutController < Kitten::ApplicationController

    def index
      render layout: 'kitten/application'
    end
  end
end
