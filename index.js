function getIssues() {
  const repo = 'phreemason/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => showResults(json));
}

function showIssues(json) {
  var temp = document.getElementById('issues-template').innerHTML
  var template = Handlebars.compile(temp)
  var issues = template(json)
  document.getElementById('issues').innerHTML = issues
}

function createIssue() {
  const repo = 'phreemason/javascript-fetch-lab'
  var title = document.getElementById('title').value
  var body = document.getElementById('body').value
  var issue = { title: title, body: body }
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post', body: JSON.stringify(issue),headers: { Authorization: `token ${getToken()}`}
  })
  .then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
  var temp = document.getElementById('repo-template').innerHTML
  var template = Handlebars.compile(temp)
  var repos = template(json)
  document.getElementById('results').innerHTML = repos
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post', headers: {Authorization: `token ${getToken()}`}
  })
  .then(res => res.json())
  .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
