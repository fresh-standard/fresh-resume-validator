/**
FRESH resume validation routines.
@license MIT. See LICENSE.md for details.
@module index.js
*/



(function() {

  var fresca = require('fresh-resume-schema');
  var validator = require('is-my-json-valid');

  module.exports = {

    isValid: function(rez) {
      // https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
      // Allow YYYY, YYYY-MM, and YYYY-MM-DD date formats
      // Allow empty string "" or " " etc as URI
      // TODO: replace this with a validator like `ajv`
      // TODO: express these format restrictions at the schema level
      var validate = validator( fresca, {
        formats: {
          date: /^\d{4}(?:-(?:0[0-9]{1}|1[0-2]{1})(?:-[0-9]{2})?)?$/,
          uri: /^(?:[a-zA-Z][a-zA-Z0-9+-.]*:[^\s]*)|\s*$/
        }
      });
      var ret = !!validate( r );
      if( !ret )
        console.error(validate.errors);
      return ret;
    }

  };

}());
