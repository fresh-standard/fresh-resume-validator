CHANGELOG
===

## v0.2.0

This release tweaks the validator for clean usage via `require()` and introduces
a basic test harness.

### Added

- Introduced Mocha test suite.
- Introduced simple Grunt build and test apparatus.
- Added linting regiment with JSHint.
- Added Travis testing harness.
- This changelog.

## Changed

- The `isValid` method will propagate validation errors back to the caller via
the `isValid.errors` collection. `isValid` itself must always return either
boolean `true` or `false`.

## v0.1.0

Initial release of the `fresh-resume-validator` module on GitHub and NPM.
