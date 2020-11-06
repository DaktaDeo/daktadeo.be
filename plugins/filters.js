import Vue from 'vue'
// import remark from 'remark'

// eslint-disable-next-line lodash/prefer-lodash-method
Vue.filter('capitalize', (value) => {
  if (!value) return ''
  value = value.toString()
  // eslint-disable-next-line lodash/prefer-lodash-method
  return value.charAt(0).toUpperCase() + value.slice(1)
})

// eslint-disable-next-line lodash/prefer-lodash-method
Vue.filter('truncate', (text, length, omission, separator) => {
  text = text || ''
  omission = omission || '...'
  length = length || 45
  separator = separator || ' '

  return _.truncate(text, { length, omission, separator })
})

// eslint-disable-next-line lodash/prefer-lodash-method
// Vue.filter('markdown', (value) => {
//   if (!value) return ''
//   value = value.toString()
//   // eslint-disable-next-line lodash/prefer-lodash-method
//   return value.charAt(0).toUpperCase() + value.slice(1)
// })
