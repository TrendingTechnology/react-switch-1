import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Switch from '../Switch'

import { ReactComponent as FlashIcon } from './assets/flash.svg'
import { ReactComponent as FlashOffIcon } from './assets/flash-off.svg'

const StyledDemo = styled.div`
  color: #333333;
  margin: 8rem 0;

  div {
    margin: 2rem 0;
  }
`

const theme = {
  switch: {
    background: '#ccdaf4',
    backgroundAccent: '#1f6eff',
    height: '4rem',
    width: '8rem',
    indicatorBackground: '#ffffff',
    indicatorSize: '3.2rem',
    indicatorMargin: '0 0.4rem',
    svgSize: '1.6rem'
  }
}

const theme_2 = {
  switch: {
    background: '#ccdaf4',
    backgroundAccent: '#1f6eff',
    height: '2rem',
    width: '6rem',
    indicatorBackground: '#ffffff',
    indicatorSize: '3.2rem',
    indicatorMargin: '0',
    svgSize: '1.6rem'
  }
}

function Demo() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <StyledDemo>
          <Switch
            label='Turn on speed mode'
            activeStateIcon={<FlashIcon />}
            inactiveStateIcon={<FlashOffIcon />}
            onChange={(isActive) => console.log(`I'm ${isActive ? 'truthy' : 'falsy'}.`)}
          />
          <Switch label='Do not disturb' />
          <Switch
            disabled
            label='Show bookmarks bar'
            activeStateIcon={<FlashIcon />}
            inactiveStateIcon={<FlashOffIcon />}
          />
        </StyledDemo>
      </ThemeProvider>

      <ThemeProvider theme={theme_2}>
        <StyledDemo>
          <Switch
            label='Turn on speed mode'
            activeStateIcon={<FlashIcon />}
            inactiveStateIcon={<FlashOffIcon />}
          />
          <Switch label='Do not disturb' />
          <Switch
            disabled
            label='Show bookmarks bar'
            activeStateIcon={<FlashIcon />}
            inactiveStateIcon={<FlashOffIcon />}
          />
        </StyledDemo>
      </ThemeProvider>
    </main>
  )
}

export default Demo
