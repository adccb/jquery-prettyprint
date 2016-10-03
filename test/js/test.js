QUnit.test('Base cases, default options', function(assert) {
  assert.ok($.prettyPrint('some_string') === 'Some String', 'base case for snake_case')
  assert.ok($.prettyPrint('some-string') === 'Some String', 'base case for hyphen-case')
  assert.ok($.prettyPrint('someString') === 'Some String', 'base case for camelCase')
  assert.ok($.prettyPrint('SomeString') === 'Some String', 'base case for PascalCase')
})

QUnit.test('Base cases, sentence case', function(assert) {
  assert.ok($.prettyPrint('some_string', { case: 'sentence' }) === 'Some string', 'sentence case for snake_case')
  assert.ok($.prettyPrint('some-string', { case: 'sentence' }) === 'Some string', 'sentence case for hyphen-case')
  assert.ok($.prettyPrint('someString', { case: 'sentence' }) === 'Some string', 'sentence case for camelCase')
  assert.ok($.prettyPrint('SomeString', { case: 'sentence' }) === 'Some string', 'sentence case for PascalCase')
})

QUnit.test('Base cases, lower case', function(assert) {
  assert.ok($.prettyPrint('some_string', { case: 'lower' }) === 'some string', 'lower case for snake_case')
  assert.ok($.prettyPrint('some-string', { case: 'lower' }) === 'some string', 'lower case for hyphen-case')
  assert.ok($.prettyPrint('someString', { case: 'lower' }) === 'some string', 'lower case for camelCase')
  assert.ok($.prettyPrint('SomeString', { case: 'lower' }) === 'some string', 'lower case for PascalCase')
})

QUnit.test('Base cases, upper case', function(assert) {
  assert.ok($.prettyPrint('some_string', { case: 'upper' }) === 'SOME STRING', 'upper case for snake_case')
  assert.ok($.prettyPrint('some-string', { case: 'upper' }) === 'SOME STRING', 'upper case for hyphen-case')
  assert.ok($.prettyPrint('someString', { case: 'upper' }) === 'SOME STRING', 'upper case for camelCase')
  assert.ok($.prettyPrint('SomeString', { case: 'upper' }) === 'SOME STRING', 'upper case for PascalCase')
})

QUnit.test('Edge cases', function(assert) {
  assert.ok($.prettyPrint(false) === false, 'gives false on a non-string')
  assert.ok($.prettyPrint('test') === 'test', 'returns the string if not delimited')
  assert.ok($.prettyPrint('test_string', { case: 'invalid value' }) === false,
            'passing incorrect casing string')
})
