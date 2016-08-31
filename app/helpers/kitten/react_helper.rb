module Kitten
  # Structure inspired by react-rails helper.
  module ReactHelper
    def react_component_container(name, props = {}, &block)
      html_options = {
        data: {
          kitten_react: true,
        }
      }

      react_component_wrapper(name, props, html_options, &block)
    end

    def react_component_child(name, props = {}, mount_options = {}, &block)
      default_mount_options = { parent_prop: 'children '}
      options = default_mount_options.merge(mount_options)

      html_options = {
        data: {
          kitten_react_mount_options: options.to_json
        }
      }

      react_component_wrapper(name, props, html_options, &block)
    end

    def react_component_wrapper(name, props = {}, html_options = {}, &block)
      # TODO: handle prerender on server-side.
      content = block.present? ? capture(&block) : nil

      default_html_options = {
        data: {
          kitten_react_type: name,
          kitten_react_props: (props.is_a?(String) ? props : props.to_json),
        }
      }
      options = default_html_options.deep_merge(html_options)

      content_tag(:div, content, options)
    end
  end
end
