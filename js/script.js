function imcCalcular() {
  //declaração de variáveis
  let altura = document.getElementById('altura').value
  let peso = document.getElementById('peso').value
  let img = window.document.getElementById('imagem')
  let image = window.document.getElementById('icone')
  let result = document.getElementById('resultado')

  // substitui a vírgula por ponto
  altura = altura.replace(',', '.')
  peso = peso.replace(',', '.')

  let calculo = peso / (altura * altura)

  if (calculo < 18.5) {
    result.innerHTML = 'Abaixo do peso'
    result.style.color = 'rgb(93, 63, 55)'
    image.src = `img/r1.jpg`
    img.src = `img/magro.webp`
    corpo.style.background = 'rgb(210, 74, 36)'
  } else if (calculo >= 18.5 && calculo <= 24.9) {
    result.innerHTML = 'Peso normal'
    result.style.color = 'rgb(9, 45, 73)'
    image.src = `img/r2.jpg`
    img.src = `img/normal.webp`
    corpo.style.background = 'rgb(44, 114, 168)'
  } else if (calculo > 24.9 && calculo <= 29.9) {
    result.innerHTML = 'Sobrepeso'
    result.style.color = 'rgb(81, 96, 9)'
    image.src = `img/r3.jpg`
    img.src = `img/sobrepeso.webp`
    corpo.style.background = 'rgb(193, 225, 35)'
  } else if (calculo > 29.9 && calculo <= 39.9) {
    result.innerHTML = 'Obesidade'
    result.style.color = 'rgb(8, 92, 87)'
    image.src = `img/r5.jpg`
    img.src = `img/obesidade.webp`
    corpo.style.background = 'rgb(20, 212, 202)'
  } else if (calculo > 39.9) {
    result.innerHTML = 'Obesidade Grave'
    result.style.color = 'rgb(165, 23, 181)'
    image.src = `img/r6.jpg`
    img.src = `img/fat.webp`
    corpo.style.background = 'rgb(71, 12, 77)'
  } else {
  }
}
