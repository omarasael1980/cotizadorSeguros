import { createContext, useState } from "react"
import {obtenerDiferenciaYear, calcularMarca,calcularPlan, formateaDinero} from '../helpers/index'
//crear context
const CotizadorContext = createContext()
//crear provider de donde vienen los datos
const CotizadorProvider = ({children})=>{
    const [datos, setDatos]= useState({
        marca:'',
        year:'',
        plan:''
    })
 const [error, setError] = useState()
 const [resultado, setResultado] = useState(0)
 const [cargando, setCargando] = useState(false)
 const handleChageData = e =>{
   //copia del state anterior
   //modificar el dato 
setDatos({
    ...datos,
    [e.target.name]: e.target.value
})
 }
const cotizarSeguro = ()=>{
    //base
    let resultado = 2000
    
    //diferencia de anio
    const diferencia = obtenerDiferenciaYear(datos.year)
     
    //restar 3% por anio
    resultado -= (diferencia * 0.03*resultado)
     
    //americano 15%  europeo 30% asiatico 5%
     resultado += resultado*calcularMarca(datos.marca)
     
    //basico 20% completo 50%

    resultado += resultado*calcularPlan(datos.plan)

     resultado = formateaDinero(resultado )
     setCargando(true)
     setTimeout(()=>{
        setResultado(resultado)
        setCargando(false)
     },1000)
     
    
}
 return (
        <CotizadorContext.Provider
        value={{
           handleChageData,
           datos,
           error,
           setError,
           cotizarSeguro,
           resultado,
           setResultado,
           cargando,
           setCargando
        }}
        >
        
            {children}
        </CotizadorContext.Provider>
    )
}

export{
    //de donde salen los datos
    CotizadorProvider
}
//se exporta el contexto 
export default CotizadorContext