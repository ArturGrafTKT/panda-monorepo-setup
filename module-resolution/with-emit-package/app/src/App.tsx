import './App.css'
import { css, cx } from 'styled-system/css'
import { Stack } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'
import { Button } from 'panda-monorepo-setup-with-emit-package-ui-lib'

function App() {
  return (
    <>
      <h1 className={css({ fontSize: '4xl', lineHeight: '1.1' })}>Hello from Panda 🐼</h1>
      <Stack>
        <Button visual="funky" shape="square" size="lg">
          Button component from ui-lib
        </Button>
        <button className={cx(button(), css({ bgColor: 'teal.400', color: 'rgba(0, 0, 0, 0.8)', fontWeight: 'bold' }))}>
          button recipe from ui-lib, with local overrides
        </button>
      </Stack>
    </>
  )
}

export default App
