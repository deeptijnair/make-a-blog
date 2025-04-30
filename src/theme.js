//import { extendTheme } from "@chakra-ui/react";
import { createSystem, defaultConfig } from "@chakra-ui/react"


const system = createSystem(defaultConfig, {
    styles: {
      global: (props) => ({
        body: {
          bg: "bg.body",
          color: "blue",
          fontFamily: "body",
        },
        h1: {
          fontFamily: "heading",
        },
        h2: {
          fontFamily: "heading",
        },
        h3: {
          fontFamily: "heading",
        },
      }),
    },
    components: {
      Button: {
        baseStyle: {
          fontFamily: "body",
          fontWeight: "bold",
        },
        variants: {
          solid: {
            bg: "bg.body",
            color: "white",
            _hover: {
              bg: "bg.body",
              color: "white",
            },
          },
        },
      },
    },  
  })

export default system;
