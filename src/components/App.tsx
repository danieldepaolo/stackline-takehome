import stacklineLogo from '/stackline_logo.svg'
import styled from 'styled-components'

import '../styles/App.css'
import ProductPage from './ProductPage'
import { toolbarBgColor } from '../constants'

const HeaderBar = styled.div`
  background-color: ${toolbarBgColor};
  margin-bottom: 3em;
  padding: 16px;

  .logo {
    height: 1.2em;
    padding: 0.2em;
  }
`

const AppWrapper = styled.div`
  background-color: #f6f8fa;
`

function App() {
  return (
    <AppWrapper>
      <HeaderBar>
        <a href="https://www.stackline.com/" target="_blank">
          <img src={stacklineLogo} className="logo" alt="Stackline Logo" />
        </a>
      </HeaderBar>
      <ProductPage />
    </AppWrapper>
  )
}

export default App
