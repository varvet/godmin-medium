# Godmin MediumEditor

[![Gem Version](http://img.shields.io/gem/v/godmin-medium-editor.svg)](https://rubygems.org/gems/godmin-medium-editor)

Godmin MediumEditor is a [MediumEditor](https://github.com/daviferreira/medium-editor) component for [Godmin](https://github.com/varvet/godmin) that adds an `f.medium_editor_area` to forms.

## Installation

Add the gem to the application's `Gemfile`:
```ruby
gem "godmin-medium-editor"
```

Or to the admin engine's `gemspec`:
```ruby
s.add_dependency "godmin-medium-editor", "~> 0.1.0"
```

Require it in your `app/assets/javascripts/application.js`, just after the `require godmin` line:

```js
//= require godmin
//= require godmin-medium-editor
```

And finally, do the same with your `app/assets/stylesheets/application.css`:
```scss
*= require godmin
*= require godmin-medium-editor
```

## Usage

Use the medium editor area in your form like so:

```erb
<%= form_for @resource do |f| %>
  <%= f.text_field :title %>
  <%= f.medium_editor_area :body, {
    buttons: ['bold', 'italic', 'underline', 'strikethrough', 'quote', 'anchor', 'image', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'superscript', 'subscript', 'orderedlist', 'unorderedlist', 'pre', 'removeFormat', 'outdent', 'indent', 'header1', 'header2'],
    buttonLabels: 'fontawesome',
    anchorTarget: true
  } %>
  <%= f.submit %>
<% end %>
```

## Contributors

https://github.com/varvet/godmin-medium-editor/graphs/contributors

## License

Godmin MediumEditor is licensed under the MIT license. See the separate MIT-LICENSE file.
