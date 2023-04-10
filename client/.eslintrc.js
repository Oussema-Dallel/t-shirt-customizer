module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:eslint-comments/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:jest/recommended',
      'plugin:react/all',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
      'plugin:unicorn/recommended',
      'plugin:valtio/recommended'
    ],
    parserOptions: {
      parser: '@typescript-eslint/parser',
      tsconfigRootDir: __dirname,
      project: ['./tsconfig.json', './tsconfig.node.json'],
    },
    plugins: [ 'jest', 'react', 'react-hooks', '@typescript-eslint', 'unicorn' ],
    root: true,
    env: {
      'browser': true,
      'serviceworker': true,
      'worker': true,
      'jest/globals': true
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      // eslint
      'array-bracket-newline': [ 'error', { multiline: true } ],
      'array-bracket-spacing': [ 'error', 'always', {
        objectsInArrays: false,
        arraysInArrays: false
      }],
      'array-element-newline': [ 'error', 'consistent' ],
      'arrow-spacing': ['error'],
      'block-spacing': [ 'error' ],
      'function-call-argument-newline': [ 'error', 'consistent' ],
      'function-paren-newline': [ 'error', 'multiline-arguments' ],
      'no-mixed-operators': [ 'error' ],
      'no-multiple-empty-lines': [ 'error', {
        max: 1
      }],
      'no-multi-spaces': [ 'error' ],
      'no-trailing-spaces': [ 'error' ],
      'max-len': [ 'error', {
        code: 120,
        tabWidth: 2,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      }],
      'multiline-ternary': [ 'error', 'always-multiline' ],
      'object-curly-newline': [ 'error', {
        multiline: true,
        consistent: true,
      }],
      'object-property-newline': [ 'error', {
        allowAllPropertiesOnSameLine: true
      }],
      'operator-linebreak': [ 'error', 'before', {
        overrides: { '=': 'after' }
      }],
      'padded-blocks': [ 'error', 'never' ],
      'require-await': ['off'],
      "sort-imports": ['error', {
        ignoreCase: true,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: [
          'single',
          'multiple',
          'all',
          'none'
        ]
      }],
      'space-in-parens': ['error', 'never'],
      'yoda': [ 'error' ],
  
      // eslint-plugin-eslint-comments
      'eslint-comments/no-unused-disable': [ 'error' ],
  
      // eslint-plugin-import
      'import/no-absolute-path': [ 'error' ],
      'import/no-dynamic-require': [ 'error' ],
      'import/no-self-import': [ 'error' ],
      'import/no-useless-path-segments': [ 'error' ],
      'import/no-mutable-exports': [ 'error' ],
      'import/no-unused-modules': [ 'error' ],
      // We use unicorn/prefer-module instead
      'import/no-commonjs': [ 'off' ],
      'import/no-amd': [ 'error' ],
      'import/no-nodejs-modules': [ 'error' ],
      'import/first': [ 'error' ],
      'import/exports-last': [ 'error' ],
      'import/no-duplicates': [ 'error' ],
      'import/order': [ 'off' ],
      'import/newline-after-import': [ 'error' ],
      'import/no-unassigned-import': [ 'error' ],
      'import/no-anonymous-default-export': [ 'error' ],
      'import/group-exports': [ 'error' ],
  
      // eslint-plugin-jest
      'jest/consistent-test-it': [ 'error', {
        fn: 'it',
        withinDescribe: 'it'
      }],
      'jest/expect-expect': [ 'error', {
        assertFunctionNames: [ 'expect', 'expectRedux' ]
      }],
      'jest/no-alias-methods': [ 'error' ],
      'jest/no-commented-out-tests': [ 'error' ],
      'jest/no-conditional-expect': [ 'error' ],
      'jest/no-conditional-in-test': [ 'error' ],
      'jest/no-deprecated-functions': [ 'error' ],
      'jest/no-disabled-tests': [ 'error' ],
      'jest/no-done-callback': [ 'error' ],
      'jest/no-duplicate-hooks': [ 'error' ],
      'jest/no-export': [ 'error' ],
      'jest/no-focused-tests': [ 'error' ],
      'jest/no-identical-title': [ 'error' ],
      'jest/no-interpolation-in-snapshots': [ 'error' ],
      'jest/no-jasmine-globals': [ 'error' ],
      'jest/no-mocks-import': [ 'error' ],
      'jest/no-standalone-expect': [ 'error' ],
      'jest/no-test-return-statement': [ 'error' ],
      'jest/prefer-called-with': [ 'error' ],
      'jest/prefer-comparison-matcher': [ 'error' ],
      'jest/prefer-equality-matcher': [ 'error' ],
      'jest/prefer-expect-resolves': [ 'error' ],
      'jest/prefer-hooks-in-order': [ 'error' ],
      'jest/prefer-hooks-on-top': [ 'error' ],
      'jest/prefer-lowercase-title': [ 'error', {
        'ignore': [ 'describe' ]
      }],
      'jest/prefer-mock-promise-shorthand': [ 'error' ],
      'jest/prefer-spy-on': [ 'error' ],
      'jest/prefer-strict-equal': [ 'error' ],
      'jest/prefer-to-contain': [ 'error' ],
      'jest/prefer-to-have-length': [ 'error' ],
      'jest/require-hook': [ 'error' ],
      'jest/require-to-throw-message': [ 'error' ],
      'jest/require-top-level-describe': [ 'error' ],
      'jest/valid-describe-callback': [ 'error' ],
      'jest/valid-expect': [ 'error' ],
      'jest/valid-expect-in-promise': [ 'error' ],
      'jest/valid-title': [ 'error' ],
  
      // eslint-plugin-react
      'react/function-component-definition': [ 'error', {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }],
      'react/no-adjacent-inline-elements': [ 'off' ],
      'react/no-set-state': [ 'off' ],
      'react/react-in-jsx-scope': [ 'off' ],
      'react/require-default-props': [ 'off' ],
      'react/sort-comp': [ 'off' ],
      'react/jsx-boolean-value': [ 'off' ],
      'react/jsx-curly-newline': [ 'error', {
        singleline: 'consistent',
        multiline: 'consistent'
      }],
      'react/jsx-curly-spacing': [ 'error', {
        'when': 'always',
        'children': true,
        'spacing': {
          'objectLiterals': 'never'
        }
      }],
      'react/jsx-filename-extension': [ 'error', {
        'extensions': [ '.tsx' ]
      }],
      'react/jsx-first-prop-new-line': [ 'error', 'multiline'],
      'react/jsx-handler-names': [ 'error', {
        checkLocalVariables: true,
      }],
      'react/jsx-indent': ['error', 'tab', {
        checkAttributes: false,
        indentLogicalExpressions: true
      }],
      'react/jsx-indent-props': [ 'error', 'tab' ],
      'react/jsx-max-depth': [ 'off' ],
      'react/jsx-newline': [ 'off' ],
      'react/jsx-no-literals': [ 'off' ],
      'react/jsx-one-expression-per-line': [ 'off' ],
      'react/jsx-props-no-spreading': [ 'error', {
        custom: 'ignore'
      }],
      'react/jsx-wrap-multilines': [ 'error', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'ignore'
      }],
      // eslint-plugin-react-hooks
      'react-hooks/rules-of-hooks': [ 'error' ],
      'react-hooks/exhaustive-deps': [ 'error' ],
  
      // @typescript-eslint/eslint-plugin
      '@typescript-eslint/no-explicit-any': [ 'error' ],
      '@typescript-eslint/no-non-null-assertion': [ 'error' ],
      '@typescript-eslint/no-unused-vars': [ 'error' ],
      '@typescript-eslint/explicit-function-return-type': [ 'error', {
        allowTypedFunctionExpressions: true,
      }],
      '@typescript-eslint/array-type': [ 'error' ],
      '@typescript-eslint/ban-tslint-comment': [ 'error' ],
      '@typescript-eslint/class-literal-property-style': [ 'error' ],
      '@typescript-eslint/consistent-type-assertions': [ 'error', {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never'
      }],
      '@typescript-eslint/consistent-type-definitions': [ 'error' ],
      '@typescript-eslint/no-base-to-string': [ 'error' ],
      '@typescript-eslint/no-confusing-non-null-assertion': [ 'error' ],
      '@typescript-eslint/no-duplicate-enum-values': [ 'error' ],
      '@typescript-eslint/no-dynamic-delete': [ 'error' ],
      '@typescript-eslint/no-extraneous-class': [ 'error' ],
      '@typescript-eslint/no-invalid-void-type': [ 'off' ],
      '@typescript-eslint/no-meaningless-void-operator': [ 'error' ],
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': [ 'error' ],
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': [ 'error' ],
      '@typescript-eslint/no-unnecessary-condition': [ 'error' ],
      '@typescript-eslint/no-unnecessary-type-arguments': [ 'error' ],
      '@typescript-eslint/non-nullable-type-assertion-style': [ 'error' ],
      '@typescript-eslint/prefer-for-of': [ 'error' ],
      '@typescript-eslint/prefer-function-type': [ 'error' ],
      '@typescript-eslint/prefer-includes': [ 'error' ],
      '@typescript-eslint/prefer-literal-enum-member': [ 'error' ],
      '@typescript-eslint/prefer-nullish-coalescing': [ 'error' ],
      '@typescript-eslint/prefer-optional-chain': [ 'error' ],
      '@typescript-eslint/prefer-reduce-type-parameter': [ 'error' ],
      '@typescript-eslint/prefer-return-this-type': [ 'error' ],
      '@typescript-eslint/prefer-string-starts-ends-with': [ 'error' ],
      '@typescript-eslint/prefer-ts-expect-error': [ 'error' ],
      '@typescript-eslint/require-await': ['off'],
      '@typescript-eslint/unified-signatures': [ 'error' ],
      '@typescript-eslint/consistent-type-exports': [ 'error' ],
      '@typescript-eslint/consistent-type-imports': [ 'error' ],
      '@typescript-eslint/explicit-member-accessibility': [ 'error' ],
      '@typescript-eslint/explicit-module-boundary-types': [ 'error' ],
      '@typescript-eslint/member-delimiter-style': [ 'error' ],
      "@typescript-eslint/member-ordering": [
        "error",
        {
          "default": {
            "memberTypes": [
              // Index signature
              "signature",
              "call-signature",
  
              // Fields
              "public-static-field",
              "protected-static-field",
              "private-static-field",
              "#private-static-field",
  
              "public-decorated-field",
              "protected-decorated-field",
              "private-decorated-field",
  
              "public-instance-field",
              "protected-instance-field",
              "private-instance-field",
              "#private-instance-field",
  
              "public-abstract-field",
              "protected-abstract-field",
  
              "public-field",
              "protected-field",
              "private-field",
              "#private-field",
  
              "static-field",
              "instance-field",
              "abstract-field",
  
              "decorated-field",
  
              "field",
  
              // Static initialization
              "static-initialization",
  
              // Constructors
              "public-constructor",
              "protected-constructor",
              "private-constructor",
  
              "constructor",
  
              // Getters
              "public-static-get",
              "protected-static-get",
              "private-static-get",
              "#private-static-get",
  
              "public-decorated-get",
              "protected-decorated-get",
              "private-decorated-get",
  
              "public-instance-get",
              "protected-instance-get",
              "private-instance-get",
              "#private-instance-get",
  
              "public-abstract-get",
              "protected-abstract-get",
  
              "public-get",
              "protected-get",
              "private-get",
              "#private-get",
  
              "static-get",
              "instance-get",
              "abstract-get",
  
              "decorated-get",
  
              "get",
  
              // Setters
              "public-static-set",
              "protected-static-set",
              "private-static-set",
              "#private-static-set",
  
              "public-decorated-set",
              "protected-decorated-set",
              "private-decorated-set",
  
              "public-instance-set",
              "protected-instance-set",
              "private-instance-set",
              "#private-instance-set",
  
              "public-abstract-set",
              "protected-abstract-set",
  
              "public-set",
              "protected-set",
              "private-set",
              "#private-set",
  
              "static-set",
              "instance-set",
              "abstract-set",
  
              "decorated-set",
  
              "set",
  
              // Methods
              "public-static-method",
              "protected-static-method",
              "private-static-method",
              "#private-static-method",
  
              "public-decorated-method",
              "protected-decorated-method",
              "private-decorated-method",
  
              "public-instance-method",
              "protected-instance-method",
              "private-instance-method",
              "#private-instance-method",
  
              "public-abstract-method",
              "protected-abstract-method",
  
              "public-method",
              "protected-method",
              "private-method",
              "#private-method",
  
              "static-method",
              "instance-method",
              "abstract-method",
  
              "decorated-method",
  
              "method"
            ],
            "order": "alphabetically"
          }
        }
      ],
      '@typescript-eslint/method-signature-style': [ 'error' ],
      'camelcase': 'off',
      '@typescript-eslint/naming-convention': [ 'error',
        {
          selector: 'default',
          format: ['camelCase']
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase']
        },
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE']
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'enumMember',
          format: ['UPPER_CASE']
        },
        {
          selector: 'typeLike',
          format: ['PascalCase']
        }
      ],
      '@typescript-eslint/no-confusing-void-expression': [ 'error' ],
      '@typescript-eslint/no-redundant-type-constituents': [ 'error' ],
      // We use unicorn/prefer-module instead
      '@typescript-eslint/no-require-imports': [ 'off' ],
      '@typescript-eslint/no-unnecessary-qualifier': [ 'error' ],
      '@typescript-eslint/no-useless-empty-export': [ 'error' ],
      // We use unicorn/prefer-module instead
      '@typescript-eslint/no-var-requires': [ 'off' ],
      '@typescript-eslint/parameter-properties': [ 'error' ],
      '@typescript-eslint/prefer-enum-initializers': [ 'error' ],
      '@typescript-eslint/prefer-readonly': [ 'error' ],
      '@typescript-eslint/prefer-regexp-exec': [ 'error' ],
      '@typescript-eslint/promise-function-async': [ 'error' ],
      '@typescript-eslint/require-array-sort-compare': [ 'error' ],
      '@typescript-eslint/sort-type-union-intersection-members': [ 'error' ],
      '@typescript-eslint/strict-boolean-expressions': [ 'error' ],
      '@typescript-eslint/switch-exhaustiveness-check': [ 'error' ],
      '@typescript-eslint/type-annotation-spacing': [ 'error' ],
  
      // typescript-eslint extensions
      'brace-style': [ 'off' ],
      '@typescript-eslint/brace-style': [ 'error', '1tbs' ],
      'comma-dangle': ['off'],
      '@typescript-eslint/comma-dangle': [ 'error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        enums: 'always-multiline',
        tuples: 'always-multiline',
        generics: 'ignore'
    }],
      'comma-spacing': ['off'],
      '@typescript-eslint/comma-spacing': [ 'error' ],
      'default-param-last': [ 'off' ],
      '@typescript-eslint/default-param-last': [ 'error' ],
      'dot-notation': [ 'off' ],
      '@typescript-eslint/dot-notation': [ 'error' ],
      'func-call-spacing': ['off'],
      '@typescript-eslint/func-call-spacing': [ 'error' ],
      'indent': [ 'off' ],
      '@typescript-eslint/indent': [ 'error', 'tab' ],
      'keyword-spacing': ['off'],
      '@typescript-eslint/keyword-spacing': ['error', { after: true }],
      'lines-between-class-members': ['off'],
      '@typescript-eslint/lines-between-class-members': ['error', {
        "exceptAfterSingleLine": true
      }],
      'no-array-constructor': ['off'],
      '@typescript-eslint/no-array-constructor': ['error'],
      'no-dupe-class-members': ['off'],
      '@typescript-eslint/no-dupe-class-members': ['error'],
      'no-extra-parens': ['off'],
      '@typescript-eslint/no-extra-parens': ['off'],
      'no-invalid-this': ['off'],
      '@typescript-eslint/no-invalid-this': ['error'],
      'no-loop-func': ['off'],
      '@typescript-eslint/no-loop-func': ['error'],
      'no-redeclare': ['off'],
      '@typescript-eslint/no-redeclare': ['error'],
      'no-shadow': ['off'],
      '@typescript-eslint/no-shadow': ['error'],
      'no-throw-literal': [ 'off' ],
      '@typescript-eslint/no-throw-literal': [ 'error' ],
      'no-unused-expressions': ['off'],
      '@typescript-eslint/no-unused-expressions': ['error'],
      'no-use-before-define': ['off'],
      '@typescript-eslint/no-use-before-define': ['error'],
      'no-useless-constructor': [ 'off' ],
      '@typescript-eslint/no-useless-constructor': [ 'error' ],
      'object-curly-spacing': ['off'],
      '@typescript-eslint/object-curly-spacing': ['error', 'always'],
      'padding-line-between-statements': ['off'],
      '@typescript-eslint/padding-line-between-statements': ['error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: [ 'const', 'let', 'var' ], next: '*' },
        { blankLine: 'any', prev: [ 'const', 'let', 'var' ], next: [ 'const', 'let', 'var' ]},
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'any', prev: 'directive', next: 'directive' }
      ],
      'quotes': ['off'],
      '@typescript-eslint/quotes': ['error', 'single', {
        avoidEscape: false,
        allowTemplateLiterals: true
      }],
      'no-return-await': ['off'],
      '@typescript-eslint/return-await': ['error', 'always'],
      'semi': ['off'],
      '@typescript-eslint/semi': ['error', 'always'],
      'space-before-blocks': [ 'off' ],
      '@typescript-eslint/space-before-blocks': [ 'error' ],
      'space-before-function-paren': ['off'],
      '@typescript-eslint/space-before-function-paren': ['error', 'always'],
      'space-infix-ops': ['off'],
      '@typescript-eslint/space-infix-ops': ['error'],
  
      // eslint-plugin-unicorn
      'unicorn/catch-error-name': [ 'error', {
        name: 'ex'
      }],
      'unicorn/filename-case': [ 'warn', {
        cases: {
          camelCase: true,
          pascalCase: true
        }
      }],
      'unicorn/no-null': [ 'off' ],
      'unicorn/no-useless-undefined': [ 'off' ],
      'unicorn/prevent-abbreviations': [ 'warn', {
        replacements: {
          args: false,
          props: false
        }
      }],
      'unicorn/prefer-ternary': [ 'off' ]
    }
  };
  