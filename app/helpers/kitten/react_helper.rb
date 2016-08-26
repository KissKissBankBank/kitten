module Kitten
  module ReactHelper
    # Structure inspired by react-rails helper.
    def react_component_container(name, props = {})
      html_options = {
        data: {
          react_class: name,
          react_props: (props.is_a?(String) ? props : props.to_json)
        }
      }

      content_tag(:div, '', html_options)
    end
  end
end
