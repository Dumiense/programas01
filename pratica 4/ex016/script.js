function contar() {
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')
  //alert('tudo  zero bala')
  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    alert('erro! Faltam dados')
  } else {
    res.innerHTML = 'Contando: '
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
      alert('passo inválido! considerando passo 1')
      p = 1
    }

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1f449}`
      }
      res.innerHTML += `\u{1f3c1}`
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1f449}`
      }
      res.innerHTML += `${c} \u{1f3c1}`
    }
  }
}