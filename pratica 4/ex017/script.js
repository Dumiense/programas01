function gerar() {
  let num = document.getElementById('num')
  let res = document.getElementById('seltab')

  if (num.value.length == 0) {
    alert('Escolha um número e tente novamente.')
  } else {
    res.innerHTML = ' '
    for (var c = 1; c <= 10; c++) {
      var tab = num.value * c
      let item = document.createElement('option')
      item.text = `${num.value} x ${c} = ${num.value * c}`
      res.appendChild(item)
    }
  }
}
