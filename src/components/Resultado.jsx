import { useCallback, useMemo, useRef } from 'react'
import useCotizador from '../hooks/useCotizador'
import { MARCAS,   PLANES } from "../constants"
const Resultado = () => {
const {resultado, datos }= useCotizador()
const {marca, plan, year} = datos
//uso de useMemo para evitar que cambie el valor con el state hasta que cambie resultado
const nombreMarca =  useMemo(()=>MARCAS.filter(m=>m.id === Number(marca)),[resultado])
//Ref mantiene sin cambios la variable hasta que se actualice el componente
const yearRef = useRef(year)
//uso de Callback como use Memo, 
const nombrePlan = useCallback(PLANES.filter(p=>p.id === Number(plan)),[resultado])
    
if (resultado === 0) return null
  return (
    <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
        <h2 className='text-gray-600 font-black text-3xl'>
            Resumen:
        </h2>
        <p className='my-2'>
            <span className='font-bold'>Marca:  </span>
            {nombreMarca[0].nombre}
        </p>
        <p className='my-2'>
            <span className='font-bold'>Plan:  </span>
            {nombrePlan[0].nombre}
        </p>
        <p className='my-2'>
            <span className='font-bold'>Año del auto:  </span>
            {yearRef.current}
        </p>
        <p className='my-2'>
            <span className='font-bold'>Costo:  </span>
            {resultado}
        </p>
     
    </div>
  )
}

export default Resultado
