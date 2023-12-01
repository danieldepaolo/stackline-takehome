import stacklineLogo from '/stackline_logo.svg'
import '../styles/App.css'
import styled from 'styled-components'
import { toolbarBgColor } from '../constants'
import ProductPage from './ProductPage'

const HeaderBar = styled.div`
  background-color: ${toolbarBgColor};
  padding: 16px;
  margin-bottom: 3em;

  .logo {
    height: 1.2em;
    padding: 0.2em;
  }
`

const AppWrapper = styled.div`
  background-color: #F6F8FA;
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
