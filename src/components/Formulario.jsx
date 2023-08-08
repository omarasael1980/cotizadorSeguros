 import { Fragment } from "react"
 import Error from "./Error"
 import { MARCAS, YEARS, PLANES } from "../constants"
 import useCotizador from "../hooks/useCotizador"
 
                                                                                                
const Formulario = () => {
  
const { handleChageData, datos, error, 
  setError,cotizarSeguro, resultado} = useCotizador()
const handleSubmit = (e)=>{
   
  e.preventDefault()
   
  if(Object.values(datos).includes('')){
    setError('Todos los campos son obligatorios')
    return
  }
  setError('')
  cotizarSeguro()
 }
   
  return (
    < >
      {error && <Error/>}
      <form onSubmit={handleSubmit}>
        <div className="my-5">
            <label className="block mb-3 font-bold text-pcazulfuerte uppercase">
                Marca
            </label>
            <select 
                onChange={e=>handleChageData(e)}
                name="marca" 
                value ={datos.marca}
                className="w-full p-3 bg-white border-grey-200">
                    <option value="">-- Selecciona Marca --</option>  
                    {MARCAS.map(marca =>(
                        <option 
                        key ={marca.id}
                        value={marca.id}>{marca.nombre}</option>
                        
                    ))}     
            </select>
       
        </div>
        <div className="my-5">
            <label className="block mb-3 font-bold text-pcazulfuerte 
            uppercase">
                Año
            </label>
            <select 
                onChange={e=>handleChageData(e)}
                name="year" 
                value ={datos.year}
                className="w-full p-3 bg-white border-grey-200">
                    <option value="">-- Selecciona el año --</option>  
                    {YEARS.map(year =>(
                        <option 
                        key ={year}
                        value={year}>{year}</option>
                        
                    ))}     
            </select>
       
        </div>
        <div className="my-5">
            <label className="block mb-3 font-bold text-pcazulfuerte uppercase">
                Planes
            </label>
            <div className="flex gap-3 items-center">
                     
                    {PLANES.map(plan =>(
                      <Fragment key={plan.id}>
                        <label>{plan.nombre}
                        </label>
                        <input 
                            onChange={e=>handleChageData(e)}
                            type="radio"
                            name="plan"
                            value={plan.id}
                            />
                                
                      </Fragment>
                        
                    ))}     
            </div>
       
        </div>
        <input 
          type="submit"
        className="w-full bg-pcazul hover:bg-pcazulfuerte  transition-colors 
        text-pcclaro cursor-pointer p-3 uppercase font-bold text-center"
        defaultValue ='Enviar'/> 
      </form>
    </>
  )
}

export default Formulario
