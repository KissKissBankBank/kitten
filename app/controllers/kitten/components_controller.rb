module Kitten
  class ComponentsController < Kitten::ApplicationController
    TYPES = %w(atoms molecules organisms)
    GROUPS_MATCH = /\A[a-z-]+\Z/
    NAMES_MATCH = /\A[a-z-]+\Z/

    def show
      type = params[:type]
      group = params[:group]
      name = params[:name]

      # Protect from people accessing other templates
      raise "Unavailable type #{type.inspect}" unless TYPES.include?(type)
      raise "Unavailable group #{group.inspect}" unless group =~ GROUPS_MATCH
      raise "Unavailable name #{group.inspect}" unless name =~ NAMES_MATCH

      render template: "kitten/#{type}/#{group}/#{name}"
    end
  end
end
