function getIssues() {
  const repo = 'bwatson78/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`)
    .then(resp => resp.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
  var template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  const repo = 'bwatson78/javascript-fetch-lab'
  var issueTitle = document.getElementById('title').value
  var issueBody = document.getElementById('body').value
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify({title: issueTitle, body: issueBody})
  }).then(resp => getIssues())
}

function showResults(json) {
  var template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json())
    .then(json => showResults(json));
  }

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
