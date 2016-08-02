module Kitten
  module ComponentsHelper
    def example(title = nil)
      content_tag(:div, class: "k-StyleguideExample") do
        if title
          concat content_tag(:p, title, class: "k-StyleguideExample__title")
        end

        yield
      end
    end
  end
end
