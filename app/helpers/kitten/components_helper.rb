module Kitten
  module ComponentsHelper
    def render_category(category)
      id = category[:id]
      title = default_title(id)
      add_menu_group(id, title)

      content_tag(:h2, class: 'k-Row karl-Title', id: id) { title }
    end

    def render_component(component,
                         title: nil,
                         description: nil)
      title ||= default_title(component)
      add_menu_component(component, title)
      render 'layouts/kitten/component',
             component: component,
             title: title,
             description: description
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

    def add_menu_group(id, title)
      @groups||= []
      @groups << { group_id: id, group_title: title, components: [] }
    end

    def add_menu_component(id, title)
      group = @groups.last
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
