const token = '17726abac5af7f865391974e3e8702b40b5cdbf0'

function getIssues() {
  const repo = 'https:/api.github.com\/repos\/eltuttle\/javascript-fetch-lab\/issues'
  fetch(repo, {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res))
}

function showIssues(json) {
}

function createIssue() {
  var title = document.getElementById('title').value
  var body = document.getElementById('body').value
  const postData = {
    title: title,
    body: body
  };
  const repo = 'https:/api.github.com\/repos\/eltuttle\/javascript-fetch-lab\/issues'
  fetch(repo, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res))//.then(json => console.log(json));
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'https:/api.github.com\/repos\/learn-co-curriculum\/javascript-fetch-lab/forks'
  fetch(repo, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
