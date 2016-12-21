module Kitten
  module UtilitiesHelper
    def render_utility_type(type, title: nil)
      title ||= utility_default_title(type)
      add_utility_menu_type(type, title)
      concat content_tag(:h1, class:"karl-Title", id: type) { title }
      yield
      nil
    end

    def render_utility_group(group, title: nil)
      title ||= utility_default_title(group)
      add_utility_menu_group(group, title)
      concat content_tag(:h2,
                         class: "karl-Title__breadcrumb",
                         id: group) { title }
      render "kitten/groups/#{group}"
    end

    def render_utility(utility,
                       title: nil,
                       description: nil,
                       examples_display: :horizontal)
      title ||= utility_default_title(utility)
      add_utility_menu(utility, title)
      render 'layouts/kitten/component',
             component: utility,
             title: title,
             description: description,
             examples_display: examples_display
    end

    private

    # Helpers to build a gigantic hash for the menu

    def add_utility_menu_type(id, title)
      @u_menu_types ||= []
      @u_menu_types << { type_id: id, type_title: title, groups: [] }
    end

    def add_utility_menu_group(id, title)
      type = @u_menu_types.last
      type[:groups] << { group_id: id, group_title: title, utilities: [] }
    end

    def add_utility_menu(id, title)
      group = @u_menu_types.last[:groups].last
      group[:utilities] << { utility_id: id, utility_title: title }
    end

    # Turns a type, group or utility into a title.
    #
    # Example:
    #   default_title('foo/bar/le-spam') #=> 'Le spam'
    def utility_default_title(path)
      path.split('/').last.gsub('-', ' ').capitalize
    end
  end
end
