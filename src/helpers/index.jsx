export function obtenerDiferenciaYear(year){
     
    return (new Date().getFullYear() - year)
}

export function calcularMarca(marca){
     
    let incremento
    switch(marca){
        case '1':
            incremento = .3
            break
        case '2':
            incremento = .15

            break
        case '3':
            incremento = .5
            break
        default:
            break
    }
    return incremento
}
export function calcularPlan(plan){
    let incremento
    switch(plan){
        case '1':
            incremento = .2
            break
        case '2':
            incremento = .5

            break
         
        default:
            break
    }
    return incremento
}
export function formateaDinero(cantidad){
    return cantidad.toLocaleString('en-US',{
        style: 'currency',
        currency:'USD',

    })
}