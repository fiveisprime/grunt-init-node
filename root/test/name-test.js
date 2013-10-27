var {%= js_test_safe_name %} = require('../lib/{%= name %}.js');

require('should');

describe('{%= js_test_safe_name %}', function() {
  it('should return awesome', function() {
    {%= js_test_safe_name %}.awesome().should.equal('awesome');
  });
});
