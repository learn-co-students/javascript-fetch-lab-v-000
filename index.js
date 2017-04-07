const rootURL = "https://api.github.com"
function getIssues() {
  const repo = 'crwhitesides/javascript-fetch-lab'
  fetch(`${rootURL}/repos/${repo}/issues`).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  const src = document.getElementById("issues-template").innerHTML
  const template = Handlebars.compile(src)
  const issueList = template(json)
  document.getElementById("issues").innerHTML = issueList
}

function createIssue() {
  const repo = 'crwhitesides/javascript-fetch-lab'
  const issueData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  }
  fetch(`${rootURL}/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => getIssues())
}

function showResults(json) {
  const src = document.getElementById("repo-template").innerHTML
  const template = Handlebars.compile(src)
  const fork = template(json)
  document.getElementById("results").innerHTML = fork
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${rootURL}/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
