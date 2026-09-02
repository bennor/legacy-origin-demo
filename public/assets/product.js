const button = document.querySelector('#product-action')
const result = document.querySelector('#product-result')

button?.addEventListener('click', () => {
  result.textContent = `Product JavaScript ran at ${new Date().toLocaleTimeString()}.`
})
