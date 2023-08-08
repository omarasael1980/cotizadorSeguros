import { CotizadorProvider } from './context/CotizadorProvider'
import AppSeguro from './components/AppSeguro'

export default function App() {
  return (
    <CotizadorProvider>
      <AppSeguro/>
    </CotizadorProvider>
     
  )
}
