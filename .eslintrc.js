'use strict';
// http://eslint.org
// 6.7.1


module.exports = {

  'extends': [
    // 'eslint:recommended',
    // 'eslint:all',
    // './configs/eslint/eslint-config-airbnb-base.js',
    // './configs/eslint/eslint-config-canonical.js',
    // './configs/eslint/eslint-config-google.js',
    './configs/eslint/eslint-config-hapi.js'
    // './configs/eslint/eslint-config-prettier.js',
    // './configs/eslint/eslint-config-standard.js',
    // './configs/eslint/eslint-config-strongloop.js',
  ],


  'plugins': [
    'eslint-plugin-babel'
    // '@hapi/eslint-plugin-hapi'
    // 'eslint-plugin-prettier'
  ],


  'root': true,
  'parser': 'babel-eslint',
  // 'parser': '@typescript-eslint/parser',


  'parserOptions': {
    'ecmaVersion': 2019,
    'sourceType': 'module',
    'allowImportExportEverywhere': false,
    'codeFrame': false,
    'ecmaFeatures': {
      // 'arrowFunctions': true,                    // enable arrow functions
      // 'binaryLiterals': true,                    // enable binary literals
      // 'blockBindings': true,                     // enable let and const (aka block bindings)
      // 'classes': true,                           // enable classes
      // 'defaultParams': true,                     // enable default function parameters
      // 'destructuring': true,                     // enable destructuring
      // 'forOf': true,                             // enable for-of loops
      // 'generators': true,                        // enable generators
      // 'globalReturn': true,                      // allow return statements in the global scope
      // 'impliedStrict': true,                     // enable global strict mode (if ecmaVersion is 5 or greater)
      // 'jsx': true,                               // enable JSX
      // 'modules': true,                           // enable modules
      // 'objectLiteralComputedProperties': true,   // enable computed object literal property names
      // 'objectLiteralDuplicateProperties': true,  // enable duplicate object literal properties in strict mode
      // 'objectLiteralShorthandMethods': true,     // enable object literal shorthand methods
      // 'objectLiteralShorthandProperties': true,  // enable object literal shorthand properties
      // 'octalLiterals': true,                     // enable octal literals
      // 'regexUFlag': true,                        // enable the regular expression u flag
      // 'regexYFlag': true,                        // enable the regular expression y flag
      // 'restParams': true,                        // enable rest parameters
      // 'spread': true,                            // enable the spread operator for arrays
      // 'superInFunctions': true,                  // enable super references inside of functions
      // 'templateStrings': true,                   // enable template strings
      // 'unicodeCodePointEscapes': true            // enable code point escapes
    }
  },


  'env': {
    'amd': true,                     // defines require() and define() as global variables as per the amd spec
    'applescript': false,            // AppleScript global variables
    'atomtest': false,               // Atom test helper globals
    'browser': true,                 // browser global variables
    'commonjs': false,               // CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack)
    'embertest': false,              // Ember test helper globals
    'es6': true,                     // enable all ECMAScript 6 features except for modules
    'greasemonkey': false,           // GreaseMonkey globals
    'jasmine': false,                // adds all of the Jasmine testing global variables for version 1.3 and 2.false
    'jest': false,                   // Jest global variables
    'jquery': false,                 // jQuery global variables
    'meteor': false,                 // Meteor global variables
    'mocha': false,                  // adds all of the Mocha testing global variables
    'mongo': true,                   // MongoDB global variables
    'nashorn': false,                // Java 8 Nashorn global variables
    'node': true,                    // Node.js global variables and Node.js scoping
    'phantomjs': false,              // PhantomJS global variables
    'prototypejs': false,            // Prototype.js global variables
    'protractor': false,             // Protractor global variables
    'qunit': false,                  // QUnit global variables
    'serviceworker': false,          // Service Worker global variables
    'shared-node-browser': false,    // globals common to both Node and Browser
    'shelljs': false,                // ShellJS global variables
    'webextensions': false,          // WebExtensions globals
    'worker': false                  // web workers global variables
  },


  'globals': {
    'flatpickr': 'off',
    'Hero': 'off',
    'Parallax': 'off',
    'Raf': 'off',
    'Superhero': 'off',
    'Tophat': 'off',
    'Umlaut': 'off'
  },


  'ignorePatterns': [
    '/node_modules/**',
    '/configs/**',
    '/dist/**',
  ],


  'noInlineConfig': false,
  'reportUnusedDisableDirectives': true,


  'rules': {
    // 'prettier/prettier': 2,
    // 'quotes': [1, 'single', 'avoid-escape'],
    'indent': [2, 2, { 'SwitchCase': 1 }],
    // 'init-declarations': [2, 'never', { 'ignoreForLoopInit': true }],
    'strict': [0, 'global'],
    'func-style': [0, 'expression'],
    '@hapi/hapi/capitalize-modules': [0, 'global-scope-only']
  },


  // 'rules': {

  //   ////////// Possible Errors //////////

  //   'for-direction': 0,                   // enforce 'for' loop update clause moving the counter in the right direction
  //   'getter-return': 0,                   // enforce return statements in getters
  //   'no-async-promise-executor': 0,       // disallow using an async function as a promise executor
  //   'no-await-in-loop': 0,                // disallow await inside of loops
  //   'no-compare-neg-zero': 1,             // disallow comparison to -0
  //   'no-cond-assign': 1,                  // disallow assignment in conditional expressions
  //   'no-console': 1,                      // disallow use of console (off by default in the node environment)
  //   'no-constant-condition': 1,           // disallow use of constant expressions in conditions
  //   'no-control-regex': 1,                // disallow control characters in regular expressions
  //   'no-debugger': 1,                     // disallow use of debugger
  //   'no-dupe-args': 1,                    // disallow duplicate arguments in functions
  //   'no-dupe-else-if': 1,                 // disallow duplicate conditions in the same if-else-if chain
  //   'no-dupe-keys': 1,                    // disallow duplicate keys when creating object literals
  //   'no-duplicate-case': 1,               // disallow a duplicate case label
  //   'no-empty': 1,                        // disallow empty statements
  //   'no-empty-character-class': 1,        // disallow the use of empty character classes in regular expressions
  //   'no-ex-assign': 1,                    // disallow assigning to the exception in a catch block
  //   'no-extra-boolean-cast': 1,           // disallow double-negation boolean casts in a boolean context
  //   'no-extra-parens': [0, 'all'],        // disallow unnecessary parentheses (off by default)
  //   'no-extra-semi': 1,                   // disallow unnecessary semicolons
  //   'no-func-assign': 1,                  // disallow overwriting functions written as function declarations
  //   'no-inner-declarations': 1,           // disallow function or variable declarations in nested blocks
  //   'no-invalid-regexp': 1,               // disallow invalid regular expression strings in the RegExp constructor
  //   'no-irregular-whitespace': 1,         // disallow irregular whitespace outside of strings and comments
  //   'no-misleading-character-class': 1,   // disallow characters which are made with multiple code points in character class syntax
  //   'no-obj-calls': 1,                    // disallow the use of object properties of the global object (Math and JSON) as functions
  //   'no-prototype-builtins': 0,           // disallow calling some Object.prototype methods directly on objects
  //   'no-regex-spaces': 1,                 // disallow multiple spaces in a regular expression literal
  //   'no-setter-return': 0,                // disallow returning values from setters
  //   'no-sparse-arrays': 1,                // disallow sparse arrays
  //   'no-template-curly-in-string': 0,     // disallow template literal placeholder syntax in regular strings
  //   'no-unexpected-multiline': 1,         // disallow confusing multiline expressions
  //   'no-unreachable': 1,                  // disallow unreachable statements after a return, throw, continue, or break statement
  //   'no-unsafe-finally': 1,               // disallow control flow statements in finally blocks
  //   'no-unsafe-negation': 0,              // disallow negation of the left operand of an in expression
  //   'require-atomic-updates': 0,          // disallow assignments that can lead to race conditions due to usage of await or yield
  //   'use-isnan': 1,                       // disallow comparisons with the value NaN
  //   'valid-typeof': 1,                    // ensure that the results of typeof are compared against a valid string


  //   ////////// Best Practices //////////

  //   'accessor-pairs': 0,               // enforces getter/setter pairs in objects
  //   'array-callback-return': 0,        // enforce return statements in callbacks of array methods
  //   'block-scoped-var': 0,             // treat var statements as if they were block scoped (off by default)
  //   'class-methods-use-this': 0,       // enforce that class methods utilize this
  //   'complexity': 0,                   // specify the maximum cyclomatic complexity allowed in a program (off by default)
  //   'consistent-return': 0,            // require return statements to either always or never specify values
  //   'curly': [0, 'all'],               // enforce consistent brace style for all control statements
  //   'default-case': 0,                 // require default case in switch statements (off by default)
  //   'dot-location': 0,                 // enforces consistent newlines before or after dots
  //   'dot-notation': 0,                 // encourages use of dot notation whenever possible
  //   'eqeqeq': 0,                       // require the use of === and !==
  //   'grouped-accessor-pairs': [0, 'getBeforeSet'],       // enforces getter/setter pairs grouping in objects
  //   'guard-for-in': 0,                 // make sure for-in loops have an if statement (off by default)
  //   'max-classes-per-file': 0,          // enforce a maximum number of classes per file
  //   'no-alert': 0,                     // disallow the use of alert, confirm, and prompt
  //   'no-caller': 0,                    // disallow use of arguments.caller or arguments.callee
  //   'no-case-declarations': 1,         // disallow lexical declrations in case clauses
  //   'no-constructor-return': 0,   // disallow return statement in class constructor
  //   'no-div-regex': 0,                 // disallow division operators explicitly at beginning of regular expression (off by default)
  //   'no-else-return': 0,               // disallow else after a return in an if (off by default)
  //   'no-empty-function': 0,            // disallow empty functions
  //   'no-empty-pattern': 1,             // disallow empty destructuring patterns
  //   'no-eq-null': 0,                   // disallow comparisons to null without a type-checking operator (off by default)
  //   'no-eval': 0,                      // disallow use of eval()
  //   'no-extend-native': 0,             // disallow adding to native types
  //   'no-extra-bind': 0,                // disallow unnecessary function binding
  //   'no-extra-label': 0,               // disallow unnecessary labels
  //   'no-fallthrough': 1,               // disallow fallthrough of case statements
  //   'no-floating-decimal': 0,          // disallow the use of leading or trailing decimal points in numeric literals (off by default)
  //   'no-global-assign': 1,             // disallow reassignments of native objects
  //   'no-implicit-coercion': 0,         // disallow the type conversions with shorter notations
  //   'no-implicit-globals': 0,          // disallow var and named function declarations in the global scope
  //   'no-implied-eval': 0,              // disallow use of eval()-like methods
  //   'no-invalid-this': 0,              // disallow this keywords outside of classes or class-like objects
  //   'no-iterator': 0,                  // disallow usage of __iterator__ property
  //   'no-labels': 0,                    // disallow use of labeled statements
  //   'no-lone-blocks': 0,               // disallow unnecessary nested blocks
  //   'no-loop-func': 0,                 // disallow creation of functions within loops
  //   'no-magic-numbers': 0,             // disallow magic numbers
  //   'no-multi-spaces': 0,              // disallow use of multiple spaces
  //   'no-multi-str': 0,                 // disallow use of multiline strings
  //   'no-new': 0,                       // disallow use of new operator when not part of the assignment or comparison
  //   'no-new-func': 0,                  // disallow use of new operator for Function object
  //   'no-new-wrappers': 0,              // disallows creating new instances of String, Number, and Boolean
  //   'no-octal': 1,                     // disallow use of octal literals
  //   'no-octal-escape': 0,              // disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
  //   'no-param-reassign': 0,            // disallow reassignment of function parameters
  //   'no-proto': 0,                     // disallow usage of __proto__ property
  //   'no-redeclare': 1,                 // disallow declaring the same variable more then once
  //   'no-restricted-properties': 0,     // disallow certain properties on certain objects
  //   'no-return-assign': 0,             // disallow use of assignment in return statement
  //   'no-return-await': 0,              // disallow unnecessary return await
  //   'no-script-url': 0,                // disallow use of javascript: urls
  //   'no-self-assign': 1,               // disallow assignments where both sides are exactly the same
  //   'no-self-compare': 0,              // disallow comparisons where both sides are exactly the same (off by default)
  //   'no-sequences': 0,                 // disallow use of comma operator
  //   'no-throw-literal': 0,             // restrict what can be thrown as an exception
  //   'no-unmodified-loop-condition': 0, // disallow unmodified loop conditions
  //   'no-unused-expressions': 0,        // disallow usage of expressions in statement position
  //   'no-unused-labels': 1,             // disallow unused labels
  //   'no-useless-call': 0,              // disallow unnecessary .call() and .apply()
  //   'no-useless-concat': 0,            // disallow unnecessary concatenation of literals or template literals
  //   'no-useless-escape': 1,            // disallow unecessary escape characters
  //   'no-useless-return': 0,            // disallow redundant return statements
  //   'no-void': 0,                      // disallow use of void operator (off by default)
  //   'no-warning-comments': 0,          // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
  //   'no-with': 0,                      // disallow use of the with statement
  //   'prefer-named-capture-group': 0,   // enforce using named capture group in regular expression
  //   'prefer-promise-reject-errors': 0, // require using Error objects as Promise rejection reasons
  //   'radix': 0,                        // require use of the second argument for parseInt() (off by default)
  //   'require-await': 0,                // disallow async functions which have no await expression
  //   'require-unicode-regexp': 0,       // enforce the use of u flag on regexp
  //   'vars-on-top': 0,                  // requires to declare all vars on top of their containing scope (off by default)
  //   'wrap-iife': 0,                    // require immediate function invocation to be wrapped in parentheses (off by default)
  //   'yoda': 0,                         // require or disallow Yoda conditions


  //   ////////// Strict Mode //////////

  //   'strict': [0, 'global'],           // require or disallow strict mode directives


  //   ////////// Variables //////////

  //   'init-declarations': 0,            // enforce or disallow variable initializations at definition
  //   'no-delete-var': 1,                // disallow deletion of variables
  //   'no-label-var': 0,                 // disallow labels that share a name with a variable
  //   'no-restricted-globals': 0,        // disallow specified global variables
  //   'no-shadow': 0,                    // disallow declaration of variables already declared in the outer scope
  //   'no-shadow-restricted-names': 0,   // disallow shadowing of names such as arguments
  //   'no-undef': 1,                     // disallow use of undeclared variables unless mentioned in a /*global */ block
  //   'no-undef-init': 0,                // disallow use of undefined when initializing variables
  //   'no-undefined': 0,                 // disallow use of undefined variable (off by default)
  //   'no-unused-vars': 1,               // disallow declaration of variables that are not used in the code
  //   'no-use-before-define': 0,         // disallow use of variables before they are defined


  //   ////////// NodeJS and CommonJS //////////

  //   'callback-return': 0,              // enforce return after a callback
  //   'global-require': 0,               // disallow require() outside of the top-level module scope
  //   'handle-callback-err': 0,          // enforces error handling in callbacks (off by default) (on by default in the node environment)
  //   'no-buffer-constructor': 1,        // disallows calling and constructing the Buffer() constructor
  //   'no-mixed-requires': 0,            // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
  //   'no-new-require': 0,               // disallow use of new operator with the require function (off by default) (on by default in the node environment)
  //   'no-path-concat': 0,               // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
  //   'no-process-env': 0,               // disallow use of process.env (off by default)
  //   'no-process-exit': 0,              // disallow process.exit() (on by default in the node environment)
  //   'no-restricted-modules': 0,        // restrict usage of specified node modules (off by default)
  //   'no-sync': 0,                      // disallow use of synchronous methods (off by default)


  //   ////////// Stylistic Issues //////////

  //   'array-bracket-newline': [0, 'never'],                          // enforces line breaks after opening and before closing array brackets
  //   'array-bracket-spacing': [0, 'never', { 'objectsInArrays': false }, { 'arraysInArrays': false }], // enforce spacing inside array brackets (fixable)
  //   'array-element-newline': [0, 'never'],                          // enforces line breaks between array elements
  //   'block-spacing': [0, 'always'],                                 // disallow or enforce spaces inside of single line blocks (fixable)
  //   'brace-style': [0, 'stroustrup', { 'allowSingleLine': true }],  // enforce one true brace style
  //   'camelcase': 0,                                                 // require camel case names
  //   'capitalized-comments': 0,                                      // enforce or disallow capitalization of the first letter of a comment
  //   'comma-dangle': 0,                                              // disallow trailing commas in object literals now considered stylistic issue with deprecation of IE8
  //   'comma-spacing': 0,                                             // enforce spacing before and after comma
  //   'comma-style': [0, 'last'],                                     // enforce one true comma style
  //   'computed-property-spacing': [0, 'never'],                      // require or disallow padding inside computed properties (fixable)
  //   'consistent-this': 0,                                           // enforce consistent naming when capturing the current execution context
  //   'eol-last': 0,                                                  // enforce newline at the end of file, with no multiple empty lines (fixable)
  //   'func-call-spacing': 0,                                         // disallow space between function identifier and application (fixable)
  //   'func-name-matching': 0,                                        // require function names to match the name of the variable or property to which they are assigned
  //   'func-names': 0,                                                // require function expressions to have a name
  //   'func-style': [0, 'declaration'],                               // enforce use of function declarations or expressions
  //   'function-call-argument-newline': 0,                            // enforce line breaks between arguments of a function call
  //   'function-paren-newline': [1, 'never'],                         // enforce consistent line breaks inside function parentheses
  //   'id-blacklist': 0,                                              // disallow specified identifiers
  //   'id-length': 0,                                                 // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
  //   'id-match': 0,                                                  // require identifiers to match the provided regular expression
  //   'implicit-arrow-linebreak': [0, 'beside'],                      // enforce the location of arrow function bodies
  //   'indent': 0,                                                    // enforce consistent indentation
  //   'jsx-quotes': 0,                                                // specify whether double or single quotes should be used in JSX attributes
  //   'key-spacing': 0,                                               // enforce spacing between keys and values in object literal properties
  //   'keyword-spacing': 0,                                           // require a space after certain keywords (fixable)
  //   'line-comment-position': 0,                                     // enforce position of line comments
  //   'linebreak-style': [0, 'unix'],                                 // disallow mixed 'LF' and 'CRLF' as linebreaks
  //   'lines-around-comment': [0, { 'beforeBlockComment': true, 'beforeLineComment': true }], // enforce empty lines around comments
  //   'lines-between-class-members': [0, 'always'],                   // require or disallow an empty line between class members
  //   'max-depth': 0,                                                 // specify the maximum depth that blocks can be nested (off by default)
  //   'max-len': 0,                                                   // specify the maximum length of a line in your program (off by default)
  //   'max-lines': 0,                                                 // enforce a maximum nuber of lines per file
  //   'max-lines-per-function': 0,                                    // enforce a maximum number of line of code in a function
  //   'max-nested-callbacks': 0,                                      // specify the maximum depth callbacks can be nested
  //   'max-params': 0,                                                // enforce a maximum number of parameters in function definitions
  //   'max-statements': 0,                                            // enforce a maximum number of statements allowed in function blocks
  //   'max-statements-per-line': 0,                                   // enforce a maximum number of statements allowed per line
  //   'multiline-comment-style': [0, 'separate-lines'],               // enforce a particular style for multiline comments
  //   'multiline-ternary': 0,                                         // enforce newlines between operands of ternary expressions
  //   'new-cap': 0,                                                   // require a capital letter for constructors
  //   'new-parens': 0,                                                // disallow the omission of parentheses when invoking a constructor with no arguments
  //   'newline-per-chained-call': 0,                                  // require a newline after each call in a method chain
  //   'no-array-constructor': 0,                                      // disallow use of the Array constructor
  //   'no-bitwise': 0,                                                // disallow use of bitwise operators (off by default)
  //   'no-continue': 0,                                               // disallow use of the continue statement
  //   'no-inline-comments': 0,                                        // disallow comments inline after code
  //   'no-lonely-if': 0,                                              // disallow if as the only statement in an else block
  //   'no-mixed-operators': 0,                                        // disallow mixed binary operators
  //   'no-mixed-spaces-and-tabs': [1, 'smart-tabs'],                  // disallow mixed spaces and tabs for indentation (recommended)
  //   'no-multi-assign': 0,                                           // disallow use of chained assignment expressions
  //   'no-multiple-empty-lines': [0, { 'max': 4 }],                   // disallow multiple empty lines
  //   'no-negated-condition': 0,                                      // disallow negated conditions
  //   'no-nested-ternary': 0,                                         // disallow nested ternary expressions
  //   'no-new-object': 0,                                             // disallow the use of the Object constructor
  //   'no-plusplus': 0,                                               // disallow use of unary operators, ++ and -- (off by default)
  //   'no-restricted-syntax': 0,                                      // disallow use of certain syntax in code
  //   'no-tabs': 0,                                                   // disallow tabs in file
  //   'no-ternary': 0,                                                // disallow the use of ternary operators
  //   'no-trailing-spaces': [0, { 'skipBlankLines': true }],          // disallow trailing whitespace at the end of lines (fixable)
  //   'no-underscore-dangle': 0,                                      // disallow dangling underscores in identifiers
  //   'no-unneeded-ternary': 0,                                       // disallow the use of ternary operators when a simpler alternative exists
  //   'no-whitespace-before-property': 0,                             // disallow whitespace before properties
  //   'nonblock-statement-body-position': [0, 'any'],                 // enforce the location of single-line statements
  //   'object-curly-newline': 0,                                      // enforce consistent line breaks inside braces
  //   'object-curly-spacing': [0, 'always'],                          // require or disallow padding inside curly braces (fixable)
  //   'object-property-newline': 0,                                   // enforce placing object properties on separate lines
  //   'one-var': 0,                                                   // require or disallow one variable declaration per function
  //   'one-var-declaration-per-line': 0,                              // require or disallow newlines around var declarations
  //   'operator-assignment': 0,                                       // require assignment operator shorthand where possible or prohibit it entirely
  //   'operator-linebreak': 0,                                        // enforce operators to be placed before or after line breaks
  //   'padded-blocks': [0, 'never'],                                  // enforce padding within blocks (off by default)
  //   'padding-line-between-statements': [1, { 'blankLine': 'always', 'prev': '*', 'next': 'return' }],
  //   'prefer-exponentiation-operator': 0,                            // disallow calls to Math.pow
  //   'prefer-object-spread': 0,                                      // disallow using object.assign with an object literal as the first argument and prefer the use of object spread instead
  //   'quote-props': [0, 'consistent'],                               // require quotes around object literal property names
  //   'quotes': [0, 'single', 'avoid-escape'],                        // specify whether double or single quotes should be used
  //   'semi': [0, 'always'],                                          // require or disallow use of semicolons instead of ASI (fixable)
  //   'semi-spacing': [0, { 'before': false, 'after': true }],        // enforce spacing before and after semicolons
  //   'semi-style': [1, 'last'],                                      // reports line terminators around semicolons
  //   'sort-keys': 0,                                                 // requires object keys to be sorted
  //   'sort-vars': 0,                                                 // sort variables within the same declaration block
  //   'space-before-blocks': [0, 'always'],                           // require or disallow space before blocks (off by default)
  //   'space-before-function-paren': [0, { 'anonymous': 'always', 'named': 'never' }],  // require a space after function names (off by default)
  //   'space-in-parens': [0, 'never'],                                // require or disallow spaces inside parentheses
  //   'space-infix-ops': 0,                                           // require spaces around operators (fixable)
  //   'space-unary-ops': [0, { 'words': true, 'nonwords': false }],   // require or disallow spaces before/after unary operators (fixable)
  //   'spaced-comment': [0, 'always'],                                // require or disallow a space immediately following the // or /* in a comment
  //   'switch-colon-spacing': [0, { 'after': true, 'before': false }], // controls spacing around colons of case and default clauses in switch statements
  //   'template-tag-spacing': [0, 'never'],                           // require or disallow spacing between template tags and their literals
  //   'unicode-bom': 0,                                               // require or disallow Unicode byte order mark (BOM)
  //   'wrap-regex': 0,                                                // require regex literals to be wrapped in parentheses


  //   ////////// ECMAScript 6 //////////

  //   'arrow-body-style': 0,        // require braces around arrow function bodies
  //   'arrow-parens': 0,            // require parens in arrow function arguments
  //   'arrow-spacing': 0,           // require space before/after arrow function's arrow (fixable)
  //   'constructor-super': 1,       // verify calls of super() in constructors
  //   'generator-star-spacing': 0,  // enforce spacing around the * in generator functions (fixable)
  //   'no-class-assign': 1,         // disallow modifying variables of class declarations
  //   'no-confusing-arrow': 0,      // disallow arrow functions where they could be confused with comparisons
  //   'no-const-assign': 1,         // disallow modifying variables that are declared using const
  //   'no-dupe-class-members': 1,   // disallow duplicate name in class members
  //   'no-duplicate-imports': 0,    // disallow duplicate module imports
  //   'no-new-symbol': 1,           // disallow new operators with the Symbol object
  //   'no-restricted-imports': 0,   // disallow specified modules when loaded by import
  //   'no-this-before-super': 1,    // disallow use of this/super before calling super() in constructors
  //   'no-useless-computed-key': 0, // disallow unnecessary computed property keys in object literals
  //   'no-useless-constructor': 0,  // disallow unnecessary constructors
  //   'no-useless-rename': 0,       // disallow renaming import, export, and destructured assignments to the same name
  //   'no-var': 0,                  // require let or const instead of var
  //   'object-shorthand': 0,        // require method and property shorthand syntax for object literals
  //   'prefer-arrow-callback': 0,   // suggest using arrow functions as callbacks
  //   'prefer-const': 0,            // suggest using const declaration for variables that are never modified after declared
  //   'prefer-destructing': 0,      // require destructuring from arrays and/or objects
  //   'prefer-numeric-literals': 0, // disallow parseInt() in favor of binary, octal, and hexadecimal literals
  //   'prefer-rest-params': 0,      // require rest parameters instead of arguments
  //   'prefer-spread': 0,           // suggest using the spread operator instead of .apply()
  //   'prefer-template': 0,         // suggest using template literals instead of strings concatenation
  //   'require-yield': 1,           // disallow generator functions that do not have yield
  //   'rest-spread-spacing': 0,     // enforce spacing between rest and spread operators and their expressions
  //   'sort-imports': 0,            // enforce sorted import declarations within modules
  //   'symbol-description': 0,      // require symbol descriptions
  //   'template-curly-spacing': 0,  // require or disallow spacing around embedded expressions of template strings
  //   'yield-star-spacing': 0,      // require or disallow spacing around the * in yield* expressions


  //   ////////// Deprecated //////////

  //   'indent-legacy': 0,          // indent
  //   'lines-around-directive': 0, // padding-line-between-statements
  //   'newline-after-var': 0,      // padding-line-between-statements
  //   'newline-before-return': 0,  // padding-line-between-statements
  //   'no-catch-shadow': 0,        // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
  //   'no-native-reassign': 0,     // no-global-assign
  //   'no-negated-in-lhs': 0,      // no-unsafe-negation
  //   'no-spaced-func': 0,         // func-call-spacing
  //   'prefer-reflect': 0,         // NO REPLACEMENT
  //   'require-jsdoc': 0,          // require JSDoc comment
  //   'valid-jsdoc': 0,            // ensure JSDoc comments are valid (off by default)


  //   ////////// Removed //////////

  //   'generator-star': 0,                    // generator-star-spacing
  //   'global-strict': 0,                     // strict
  //   'no-arrow-condition': 0,                // no-confusing-arrowno-constant-condition
  //   'no-comma-dangle': 0,                   // comma-dangle
  //   'no-empty-class': 0,                    // no-empty-character-class
  //   'no-empty-label': 0,                    // no-labels
  //   'no-extra-strict': 0,                   // strict
  //   'no-reserved-keys': 0,                  // quote-props
  //   'no-space-before-semi': 0,              // semi-spacing
  //   'no-wrap-func': 0,                      // no-extra-parens
  //   'space-after-function-name': 0,         // space-before-function-paren
  //   'space-after-keywords': 0,              // keyword-spacing
  //   'space-before-function-parentheses': 0, // space-before-function-paren
  //   'space-before-keywords': 0,             // keyword-spacing
  //   'space-in-brackets': 0,                 // object-curly-spacingarray-bracket-spacing
  //   'space-return-throw-case': 0,           // keyword-spacing
  //   'space-unary-word-ops': 0,              // space-unary-ops
  //   'spaced-line-comment': 0                // spaced-comment

  // }

};
