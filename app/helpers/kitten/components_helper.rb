module Kitten
  module ComponentsHelper
    def render_type(type, title: nil)
      title ||= default_title(type)
      add_menu_type(type, title)
      concat content_tag(:h1, class:"karl-Title", id: type) { title }
      yield
      nil
    end

    def render_group(group, title: nil)
      title ||= default_title(group)
      add_menu_group(group, title)
      concat content_tag(:h2,
                         class: "karl-Title__breadcrumb",
                         id: group) { title }
      render "kitten/groups/#{group}"
    end

    def render_component(component,
                         title: nil,
                         description: nil,
                         examples_display: :horizontal)
      title ||= default_title(component)
      add_menu_component(component, title)
      render 'layouts/kitten/component',
             component: component,
             title: title,
             description: description,
             examples_display: examples_display
    end

    def example(title = nil)
      content_tag(:div, class: "karl-Example") do
        if title
          concat content_tag(:p, title, class: "karl-Example__title")
        end

        yield
      end
    end

    private

    # Helpers to build a gigantic hash for the menu

    def add_menu_type(id, title)
      @menu_types ||= []
      @menu_types << { type_id: id, type_title: title, groups: [] }
    end

    def add_menu_group(id, title)
      type = @menu_types.last
      type[:groups] << { group_id: id, group_title: title, components: [] }
    end

    def add_menu_component(id, title)
      group = @menu_types.last[:groups].last
      group[:components] << { component_id: id, component_title: title }
    end

    # Turns a type, group or component into a title.
    #
    # Example:
    #   default_title('foo/bar/le-spam') #=> 'Le spam'
    def default_title(path)
      path.split('/').last.gsub('-', ' ').capitalize
    end
  end
end
