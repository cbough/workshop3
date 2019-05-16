class Classic {
  constructor() {
    this.frame = 'black border'
    this.art_url = 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
  }
}

render()
  let pic = document.createElement('div')
  pic.style.width = '200px'
  pic.style.height = '100px'
  document.body.appendChild(pic)


var art1 = new Classic("https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg")
art1.render()

/*class Meme extends Classic {
  constructor() {
    super()*/
