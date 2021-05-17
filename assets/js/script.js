const original = document.querySelector('#original')
const contador = document.querySelector('#contador')
const select = document.querySelector('#efeito')
const modificado = document.querySelector('#modificado')


original.addEventListener('keyup',function() {
  console.log(original.value.length)
  contador.textContent = 0 + original.value.length
 
 
 if (efeito.value == 'uppercase') {
   modificado.value = original.value.toUpperCase()
 }
 else {
   modificado.value = original.value.toLowerCase()
 }
 
})