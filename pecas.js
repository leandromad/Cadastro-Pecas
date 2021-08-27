const listaDePecas = ['Ar condicionado', 'Motor', 'Amortecedor', 'Suspensão']

if (listaDePecas.length < 5) {
  console.log('É possível cadastrar mais peças')
} else {
  console.log('Não há mais espaço na lista')
}

var peso = 300

if (peso > 100) {
  console.log('Peso da peça está adequado')
} else {
  console.log('Peso insuficiente')
}

let nomePeca = 'pistão'

// VERIFICAÇÃO POR IF
/*if (nomePeca.length > 3) {
  console.log('Nome adequado!')
} else if (nomePeca.length == 0) {
  console.log('O nome não pode ser vazio')
} else {
  console.log('O nome deve possuir mais de 3 caracteres')
}*/

// VERIFICAÇÃO POR SWITCH - CASE
switch (nomePeca.length) {
  case 0: // Caso tamanho do nome seja 0
    console.log('O nome não pode ser vazio')
    break

  case 1: // Caso tamanbho do nome seja 1, 2 ou 3
  case 2:
  case 3:
    console.log('O nome deve possuir mais de 3 caracteres')
    break

  default:
    // Padrão
    console.log('Nome adequado!')
    break
}
