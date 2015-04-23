module Godmin
  module MediumEditor
    module Helper
      def medium_editor_area(attribute, options = {}, html_options = {})
        text_area(attribute, html_options.deep_merge(data: {
          behavior: "medium-editor",
          options: options
        }))
      end
    end
  end

  FormBuilders::FormBuilder.send(:include, MediumEditor::Helper)
end
