/**
Test routines for fresh-resume-validator.
@module test.js
@license MIT. See LICENSE.md for details.
*/

var chai = require('chai')
  , expect = chai.expect
  , should = chai.should()
  , _ = require('underscore')
  , validator = require('../src/index')
  , resumes = require('fresh-test-resumes');

var _rF, _rJ;




/**
Set up a basic validation test suite.
*/
describe('VALIDATE', function () {

    // Test each resume mounted on the resumes.fresh collection
    _.each( resumes.fresh, function(rez, moniker) {
      if( !(typeof rez === 'string' || rez instanceof String )) { //[1]
        if( moniker === 'empty' )
          return;
        it( 'Validator should return true for ' + moniker + ' (FRESH)', function () {
          expect(validator.isValid( rez )).to.be.true;
        });
      }
    });

    // Test each resume mounted on the resumes.jrs collection
    _.each( resumes.jrs, function(rez, moniker) {
      if( !(typeof rez === 'string' || rez instanceof String )) { //[1]
        if( moniker === "empty" )
          return;
        it( 'Validator should return false for ' + moniker + ' (JRS)', function () {
          expect(validator.isValid( rez )).to.be.false;
        });
      }
    });

});

// [1]: Ignore broken resumes (invalid JSON), which are loaded as strings
//      instead of objects by fresh-test-resumes.
