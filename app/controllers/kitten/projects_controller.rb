module Kitten
  class ProjectsController < Kitten::ApplicationController
    def default_props
      render json: {
        limit: 4242
      }
    end
  end
end
