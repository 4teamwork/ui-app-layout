import '@testing-library/jest-dom'
import Vue from 'vue'
import Vuetify from 'vuetify'
import { render } from '@testing-library/vue'

Vue.use(Vuetify)

global.mount = (component, options) => {
  const vuetify = new Vuetify()

  let vue

  const renderFunctions = render(
    component,
    {
      vuetify,
      ...options,
    },
    (_vue) => {
      vue = _vue
    },
  )

  return Object.assign(renderFunctions, {
    vue,
  })
}

global.beforeEach(() => {
  jest.resetModules()
})
