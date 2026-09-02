const status = document.querySelector('#api-status')

fetch('/api/message')
  .then((response) => response.json())
  .then((data) => {
    status.textContent = `${data.message}. API cookie: ${data.cookie ?? '(none)'}`
  })
  .catch(() => {
    status.textContent = 'The legacy API request failed.'
  })
