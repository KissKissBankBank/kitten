module Kitten
  module ReactHelper
    # Structure inspired by react-rails helper.
    def react_component_container(name, props = {}, &block)
      # TODO: handle prerender on server-side.
      content = block.present? ? capture(&block) : nil

      html_options = {
        data: {
          kitten_react: true,
          kitten_react_type: name,
          kitten_react_props: (props.is_a?(String) ? props : props.to_json)
        }
      }

      content_tag(:div, content, html_options)
    end

    def react_component_child(name, props = {}, options = {}, &block)
      opts = { parent_prop: 'children '}
      opts = opts.merge(options)

      # TODO: handle prerender on server-side.
      content = block.present? ? capture(&block) : nil

      html_options = {
        data: {
          kitten_react_type: name,
          kitten_react_props: (props.is_a?(String) ? props : props.to_json),
          kitten_react_mount_options: opts.to_json
        }
      }

      content_tag(:div, content, html_options)
    end
  end
end
