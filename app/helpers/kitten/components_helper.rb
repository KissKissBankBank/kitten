module Kitten
  module ComponentsHelper
    def render_type(type, title:)
      add_menu_type(type, title)
      concat content_tag(:h1, class:"k-StyleguideTitle", id: type) { title }
      yield
      nil
    end

    def render_group(group, title:)
      add_menu_group(group, title)
      concat content_tag(:h2,
                         class: "k-StyleguideTitle__breadcrumb",
                         id: group) { title }
      render "kitten/groups/#{group}"
    end

    def render_component(component,
                         title: nil,
                         description: nil,
                         examples_display: :horizontal)
      add_menu_component(component, title)
      render 'layouts/kitten/component',
             component: component,
             title: title || component.split('/').last.capitalize,
             description: description,
             examples_display: examples_display
    end

    def example(title = nil)
      content_tag(:div, class: "k-StyleguideExample") do
        if title
          concat content_tag(:p, title, class: "k-StyleguideExample__title")
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
  end
end
