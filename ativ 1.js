function calcularDigitos(cpf) {
    var soma = 0, peso = 10

    
    for (var i = 0; i < 9; i++) {
        soma += cpf[i] * peso--
    }
    var primeiro = soma % 11 < 2 ? 0 : 11 - (soma % 11)

    
    cpf += primeiro

    soma = 0, peso = 11
    
    for (var i = 0; i < 10; i++) {
        soma += cpf[i] * peso--
    }
    var segundo = soma % 11 < 2 ? 0 : 11 - (soma % 11)

    return primeiro + "" + segundo
}


console.log(calcularDigitos("123456789"))
