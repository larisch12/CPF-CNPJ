function verificar(codigoBarras) {
    if (codigoBarras.length !== 13) {
        console.log("O código de barras deve ter 13 dígitos.")
        return
    }

    
    let base = codigoBarras.slice(0, 12)
    let verificador = parseInt(codigoBarras[12])

   
    let soma = 0
    for (let i = 0; i < base.length; i++) {
        let digito = parseInt(base[i])
        soma += i % 2 === 0 ? digito * 1 : digito * 3
    }

    let calculado = 10 - (soma % 10)  
    if (calculado === 10) calculado = 0

    
    if (calculado !== verificador) {
        console.log("O código de barras é inválido.")
        return
    }

    
    let pais = codigoBarras.slice(0, 3)
    let fabricante = codigoBarras.slice(3, 7)
    let produto = codigoBarras.slice(7, 12)

    
    console.log("Código de barras válido!")
    console.log("País de origem:", pais)
    console.log("Código do fabricante:", fabricante)
    console.log("Código do produto:", produto)
}


let codigoBarras = "7891234567895"
verificar(codigoBarras)
