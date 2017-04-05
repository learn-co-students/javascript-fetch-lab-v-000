const userName = ""
const repo = 'learn-co-curriculum/javascript-fetch-lab'

function getIssues() {

  fetch(`https://api.github.com/repos/${userName}/javascript-fetch-lab/issues`)
    .then(res => res.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
  const issues = document.getElementById('issues-template').innerHTML
  const template = Handlebars.compile(issues)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  const issueToCreate = JSON.stringify({ title: title, body: body})

  fetch(`https://api.github.com/repos/${userName}/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`,
    },
    body: issueToCreate
  }).then(r => getIssues())
}

function showResults(json) {
  const result = document.getElementById('repo-template').innerHTML
  const template = Handlebars.compile(result)
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {

  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(fork => fork.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
