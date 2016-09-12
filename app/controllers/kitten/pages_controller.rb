module Kitten
  class PagesController < Kitten::ApplicationController
    NAME_MATCH = /\A[a-z-]+\Z/.freeze

    def show
      name = params[:name]

      # Protect from people accessing other templates
      unless name =~ NAME_MATCH
        return render status: :not_found, plain: 'Impossible page name'
      end

      render template: "kitten/pages/#{name}"
    end
  end
end
