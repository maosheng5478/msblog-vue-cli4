module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-alert': 0,
    'no-multi-spaces': 'error', // 禁止多个空格
    'semi': [2, 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    'brace-style': [2, '1tbs', {'allowSingleLine': true}],
    'quotes': ['error', 'single'], // 使用单引号
    'vue/no-unused-vars': 'error',
    'dot-notation':0,
    'import/first':0,
    'vue/singleline-html-element-content-newline':0,
    'vue/html-closing-bracket-spacing': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/html-indent': 'error',
    'space-before-function-paren':0,
    'vue/max-attributes-per-line':["error", {
      "singleline": {
        "max": 3,
        "allowFirstLine": true
      },
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    'vue/html-self-closing': 1,
    // render 函数必须有一个返回值
    'vue/require-render-return': 'error',
    //保证 v-bind:key 和 v-for 指令成对出现
    'vue/require-v-for-key': 'error',
    // 检查默认的prop值是否有效
    'vue/require-valid-default-prop': 'error',
    // 保证computed属性中有return语句
    'vue/return-in-computed-property': 'error',
    // 校验 template 根节点
    'vue/valid-template-root': 0,
  }
}
