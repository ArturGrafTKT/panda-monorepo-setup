import { definePreset, defineRecipe } from '@pandacss/dev'

const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'The styles for the Button component',
  base: {
    display: 'flex',
  },
  variants: {
    visual: {
      funky: { bg: 'red.200', color: 'white' },
      edgy: { border: '3px solid token(colors.purple.500)' },
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '8', fontSize: '40px' },
    },
    shape: {
      square: { borderRadius: '0' },
      circle: { borderRadius: 'full' },
    },
  },
  defaultVariants: {
    visual: 'funky',
    size: 'sm',
    shape: 'circle',
  },
})

const spinnerRecipe = defineRecipe({
  className: 'spinner',
  description: 'The styles for the Button component',
  base: {
    display: 'flex',
    backgroundColor: "red",
    width: "100px",
    height: "100px",
  },
})

export const preset = definePreset({
  theme: {
    recipes: {
      button: buttonRecipe,
      spinner: spinnerRecipe
    },
  },
})

export default preset
