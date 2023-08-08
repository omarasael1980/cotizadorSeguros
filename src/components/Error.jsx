import useCotizador from "../hooks/useCotizador"

const  Error = ()=> {
    const {error} = useCotizador()
  return (
    <div>
     <p className="border text-center border-red-400
      bg-red-100 first-letter:py-3 text-red-700 font-bold">
        {error}
      </p>
    </div>
  )
}

export default Error
