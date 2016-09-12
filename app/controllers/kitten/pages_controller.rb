module Kitten
  class PagesController < Kitten::ApplicationController
    NAME_MATCH = /\A[a-z-]+\Z/.freeze

    def show
      id = params[:id]

      # Protect from people accessing other templates
      unless id =~ NAME_MATCH
        return render status: :not_found, plain: 'Impossible page name'
      end

      render template: "kitten/pages/#{id}"
    end
  end
end
