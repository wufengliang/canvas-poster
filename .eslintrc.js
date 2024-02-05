/*
 * @Author: wufengliang 44823912@qq.com
 * @Date: 2024-02-04 14:42:00
 * @LastEditTime: 2024-02-04 15:05:32
 * @Description: eslint 配置
 */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "standard-with-typescript",
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
    "rules": {
        "@typescript-eslint/explicit-function-return-type":0,
        'no-return-assign':0,
        "@typescript-eslint/strict-boolean-expressions":0,
        "@typescript-eslint/no-floating-promises":0,
        "no-cond-assign":0,
        "@typescript-eslint/prefer-nullish-coalescing":0
    }
}
