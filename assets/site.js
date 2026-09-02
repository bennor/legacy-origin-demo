const status = document.querySelector('#api-status')
const cookieValue = document.querySelector('#cookie-value')

const visibleProxyCookie = document.cookie
  .split('; ')
  .find((cookie) => cookie.startsWith('_example_cookie='))

cookieValue.textContent = visibleProxyCookie ?? 'No _example_cookie found'

fetch('/api/message.json')
  .then((response) => response.json())
  .then((data) => {
    status.textContent = data.message
  })
  .catch(() => {
    status.textContent = 'The static JSON request failed.'
  })
