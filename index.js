function getIssues() {
  const repo = 'https://api.github.com/repos/jilustrisimo/javascript-fetch-lab/issues'

  fetch(repo, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  var template = Handlebars.compile(document.getElementById("issues-template").innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  const repo = 'https://api.github.com/repos/jilustrisimo/javascript-fetch-lab/issues'
  const issue = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

  fetch(repo, {
    method: 'post',
    body: JSON.stringify(issue),
    headers: {
    Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => getIssues())
}

function showResults(json) {
  var template = Handlebars.compile(document.getElementById("repo-template").innerHTML)
  document.getElementById('results').innerHTML = template(json)
}


function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  fetch(repo, {
    method: 'post',
    headers: {
    Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => showResults(json))
}

function getToken() {
  return ''
}
