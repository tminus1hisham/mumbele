import "vuetify/styles"
import { createVuetify } from "vuetify"

export default createVuetify({
  theme: {
    defaultTheme: "mumbele",
    themes: {
      mumbele: {
        dark: false,
        colors: {
          primary: "#0f2948",
          secondary: "#ff7a00",
        },
      },
    },
  },
})
