fetch('password.txt', {
  'method': 'PUT',
  'headers': {
    'X-Udacity-Exercise': 'hello'
  }
}).then(function(res) {
  return res.text()
}).then(function(data) {
  console.log(data)
})