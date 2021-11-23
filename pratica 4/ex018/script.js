let lista = []
let num = document.getElementById('txtn')
let parci = document.getElementById('selp')
let res = document.getElementById('res')

function valida1(n, l) {
  if (lista.indexOf(Number(n)) != -1) {
    return false
  } else {
    return true
  }
}

function valida2(n) {
  if (n <= 0 || n > 100) {
    return false
  } else {
    return true
  }
}

function add() {
  //validação de repetidos
  if (num.value.length == 0) {
    alert('nenhum número adcionado ainda')
  }
  if (valida1(num.value, lista) && valida2(num.value)) {
    //lista de itens

    lista.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `valor ${num.value} adicionado`
    parci.appendChild(item)
    res.innerHTML = ''
  } else {
    alert('numero ja adicionado ou inválido, tente novamente')
  }
  num.value = ''
  num.focus()
  console.log(lista)
}

function fin() {
  if (lista.length == 0) {
    alert('nenhum valor adicionado')
  } else {
    let tot = lista.length

    let maior = lista[0]
    let menor = lista[0]
    let soma = 0
    let media = 0
    for (let pos in lista) {
      soma += lista[pos]
    }

    for (let pos in lista) {
      if (lista[pos] > maior) maior = lista[pos]
    }
    for (let pos in lista) {
      if (lista[pos] < menor) menor = lista[pos]
    }

    for (let som in lista) {
    }

    media = soma / tot

    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo ${tot} números foram adicionados </p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior} </p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor} </p>`
    res.innerHTML += `<p>A soma dos valores é ${soma} </p>`
    res.innerHTML += `<P>A média dos valores é ${media} </p>`
  }
}
