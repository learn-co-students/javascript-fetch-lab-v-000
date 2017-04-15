function getIssues() {
  var issueURL = 'https://api.github.com/repos/mdjurdj1/javascript-fetch-lab/issues'
  //using fetch
  fetch(issueURL)
  .then(res => res.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  var template = Handlebars.compile(document.getElementById("issues-template").innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  const issue = {
     title: document.getElementById('title').value,
     body: document.getElementById('body').value
   }
  var issueURL = 'https://api.github.com/repos/mdjurdj1/javascript-fetch-lab/issues'
  //using fetch
  fetch(issueURL, {
    method: "post",
    headers: {
       Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(issue)
  }).then(res => res.json())
  .then(json => getIssues(json))
}

function showResults(json) {
  var template = Handlebars.compile(document.getElementById("repo-template").innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const forkUrl = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  //use fetch to fork it!
  fetch(forkUrl, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
