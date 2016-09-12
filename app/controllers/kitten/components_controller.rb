module Kitten
  class ComponentsController < Kitten::ApplicationController
    TYPES = %w(atoms molecules organisms).freeze
    NAME_MATCH = /\A[a-z-]+\Z/.freeze

    def index
      render template: 'layouts/kitten/components',
             layout: 'kitten/application'
    end

    def show
      type = params[:type]
      group = params[:group]
      name = params[:name]

      # Protect from people accessing other templates
      unless TYPES.include?(type) && group =~ NAME_MATCH && name =~ NAME_MATCH
        return render status: :not_found, plain: 'Impossible component'
      end

      render template: "kitten/components/#{type}/#{group}/#{name}",
             layout: 'kitten/application'
    end
  end
end
