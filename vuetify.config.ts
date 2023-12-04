import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'
import type { ThemeDefinition } from 'vuetify'

const sdxTheme: ThemeDefinition = {
  dark: false,
  colors: {
    // background: '#232323',
    // surface: '#353535',
    // primary: '#fbef5d',
    // 'primary-darken-1': '#AD1457',
    // secondary: '#424242',
    // 'secondary-darken-1': '#212121',
    // error: '#DD3246',
    // info: '#4D97c1',
    // success: '#6c9a40',    
    // warning: '#dd3246',
    "slate-500": "#64748b"
  }
}


export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'sdxTheme',
    themes: {
      sdxTheme,
    }
  }
})