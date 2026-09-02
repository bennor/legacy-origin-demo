const status = document.querySelector('#api-status')
const cookieValue = document.querySelector('#cookie-value')

const visibleProxyCookie = document.cookie
  .split('; ')
  .find((cookie) => cookie.startsWith('vercel-origin-proxy='))

cookieValue.textContent = visibleProxyCookie ?? 'Not visible to JavaScript (expected for HttpOnly)'

fetch('/api/message.json')
  .then((response) => response.json())
  .then((data) => {
    status.textContent = data.message
  })
  .catch(() => {
    status.textContent = 'The static JSON request failed.'
  })
