const results = document.getElementById('results')
const issues = document.getElementById('issues')
const githubUrl = "https://api.github.com/"
var forkedRepo = 'mxdavis/javascript-fetch-lab'

function getIssues(json) {
  fetch(`${githubUrl}repos/${forkedRepo}/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`, 
    },
  }).then(rep => rep.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
  var repoTemplate = Handlebars.compile(document.getElementById("issues-template").innerHTML);
  issues.innerHTML = repoTemplate(json)
}

function createIssue() {
  var title = document.getElementById('title').value
  var issue = document.getElementById('body').value
  // var forkedRepo = results.getElementsByTagName("a")[0].innerHTML
  var issueData = { title: title, body: issue }
  fetch(`${githubUrl}repos/${forkedRepo}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`, 
    },
    body: JSON.stringify(issueData)
  }).then(rep => rep.json())
    .then(json => getIssues(json))
}

function showResults(repo) {
  var repoTemplate = Handlebars.compile(document.getElementById("repo-template").innerHTML);
  results.innerHTML = repoTemplate(repo)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${githubUrl}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(rep => rep.json())
    .then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}