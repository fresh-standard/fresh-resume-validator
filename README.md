fresh-resume-validator
===
*Validate résumés and CVs against the [FRESH Resume Schema][frs].*

## Use

### Via the Command Line

The easiest way to use the validator is with [HackMyResume][hmr]'s `validate`
command, which uses `fresh-resume-validator` internally.

1. Install HackMyResume with `npm i -g hackmyresume`.
2. Validate the resume with `hackmyresume validate resume.json`.

### Via the API

You can also validate resumes programatically.

1. Install the `fresh-resume-validator` library.

    ```bash
    npm i fresh-resume-validator --save
    ```

2. Call the `isValid` method.

    ```js
    var validator = require('fresh-resume-validator');
    if ((validator.isValid(myResume)) {
      // do something
    }

    ```

## License

MIT. See [LICENSE.md][lic] for details.

[frs]: https://resume.freshstandard.org
[hmr]: https://github.com/hacksalot/HackMyResume
[lic]: LICENSE.md
