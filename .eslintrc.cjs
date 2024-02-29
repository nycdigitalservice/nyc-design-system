module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "standard",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "ignorePatterns": ["**/dist/*.js", "**/scripts/*.js"],
    "rules": {
      "no-unused-expressions": ["error", { "allowTernary": true }]
    }
}
