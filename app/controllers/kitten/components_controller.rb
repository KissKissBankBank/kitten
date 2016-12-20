module Kitten
  class ComponentsController < Kitten::ApplicationController
    NAME_MATCH = /\A[a-z-]+\Z/.freeze

    def index
      render template: 'layouts/kitten/components',
             layout: 'kitten/application'
    end

    def show
      group = params[:group]
      name = params[:name]

      # Protect from people accessing other templates
      unless group =~ NAME_MATCH && name =~ NAME_MATCH
        return render status: :not_found, plain: 'Impossible component'
      end

      render template: "kitten/components/#{group}/#{name}",
             layout: 'kitten/application'
    end
  end
end
