{%= name %}{% if (travis) { %} [![Build Status](https://secure.travis-ci.org/{%= git_user %}/{%= git_repo %}.png?branch=master)](http://travis-ci.org/{%= git_user %}/{%= git_repo %}){% } %}
===

{%= description %}

# Usage
Install the module with: `npm install {%= name %}`

```javascript
var {%= js_safe_name %} = require('{%= name %}');
```

## License
Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
