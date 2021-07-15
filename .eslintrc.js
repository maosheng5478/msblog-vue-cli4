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
    'vue/singleline-html-element-content-newline':0,
    'vue/html-closing-bracket-spacing': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/html-indent': 'error',
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
    'vue/html-self-closing': 'error',
    // render 函数必须有一个返回值
    'vue/require-render-return': 'error',
    //保证 v-bind:key 和 v-for 指令成对出现
    'vue/require-v-for-key': 'error',
    // 检查默认的prop值是否有效
    'vue/require-valid-default-prop': 'error',
    // 保证computed属性中有return语句
    'vue/return-in-computed-property': 'error',
    // 强制校验 template 根节点
    'vue/valid-template-root': 'error',
    // 强制校验 v-bind 指令
    'vue/valid-v-bind': 'error',
    // 强制校验 v-else-if 指令
    'vue/valid-v-else-if': 'error',
    // 强制校验 v-else 指令
    'vue/valid-v-else': 'error',
    // 强制校验 v-for 指令
    'vue/valid-v-for': 'error',
    // 强制校验 v-if 指令
    'vue/valid-v-if': 'error',
    // 强制校验 v-model 指令
    'vue/valid-v-model': 'error',
    // 强制校验 v-show 指令
    'vue/valid-v-show': 'error',
  }
}
