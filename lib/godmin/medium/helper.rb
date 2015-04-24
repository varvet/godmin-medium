module Godmin
  module Medium
    module Helper
      def medium_area(attribute, options = {}, html_options = {})
        text_area(attribute, html_options.deep_merge(data: {
          behavior: "medium-editor",
          options: options
        }))
      end
    end
  end

  FormBuilders::FormBuilder.send(:include, Medium::Helper)
end
