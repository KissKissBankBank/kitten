module.exports ={
  "extends": ["plugin:prettier/recommended"],
  "parser": "babel-eslint",
  "plugins": ["react"],
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "ignorePatterns": ["assets/javascripts/kitten/components/form/dropdown-phone-select/data/CountryData.js"],
  "rules": {
    "no-unused-vars": ["error", {
      "ignoreRestSiblings": true,
      "argsIgnorePattern": "^_"
    }],
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "no-debugger": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  }
}
