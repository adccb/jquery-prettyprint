# jquery-prettyprint
convert camelCase, hyphen-case, PascalCase, or snake_case strings to Title Case, UPPER CASE, Sentence case, or lower case strings.

## Usage

pass a camelCase, hyphen-case, PascalCase, or snake_case string in the first position, and you'll get out an easily-readable, space-delimited string following casing rules you can specify.

this will default to output Title Case -- if you want something else, pass an object in position two. your object will need a `case` key. valid values are `title`, `sentence`, `upper`, and `lower`.

## Get it

Simply download `jquery-prettyprint.js` and insert in a script tag after jQuery in your HTML.

## Tests

Open `/test/index.html` in a web browser to view test results. Tests are available in `/test/js/test.js`.
