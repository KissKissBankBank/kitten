module Kitten
  module ComponentsHelper
    def render_category(category)
      id = category[:id]
      title = category[:label]
      add_menu_group(id, title)

      content_tag(:h2, class: 'k-Row karl-Title', id: id) { title }
    end

    def render_component(component,
                         title: nil,
                         hidden_on_s: false)
      title ||= category[:component]
      add_menu_component(component, title)
      render 'layouts/kitten/component',
             component: component,
             title: title,
             hidden_on_s: hidden_on_s
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

  end
end
