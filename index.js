function getIssues() {
  const repo = 'krishl/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function showIssues(json) {
  var template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  var issuesList = template(json)
  document.getElementById('issues').innerHTML = issuesList
}

function createIssue() {
  const repo = 'krishl/javascript-fetch-lab'
  var issueTitle = document.getElementById('title').value
  var issueBody = document.getElementById('body').value
  var postIssue = { title: issueTitle, body: issueBody }

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(postIssue),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function showResults(json) {
  var template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  var repoList = template(json)
  document.getElementById('results').innerHTML = repoList
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
