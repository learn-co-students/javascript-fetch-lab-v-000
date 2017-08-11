function getIssues() {
  fetch('https://api.github.com/repos/mk-etlinger/javascript-fetch-lab/issues')
  .then(response => response.json()).then(json => showIssues(json))
}

function showIssues(json) {
  const el = document.getElementById("issues-template").innerHTML
  const template = Handlebars.compile(el)
  const repoList = template(json)
  debugger;
  document.getElementById("issues").innerHTML = repoList
}

function createIssue() {
  const title = document.getElementById("title").value
  const body = document.getElementById("body").value
  const postData = { title: title, body: body }
  fetch('https://api.github.com/repos/mk-etlinger/javascript-fetch-lab/issues', {
    method: 'POST',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(getIssues())
}

function showResults(json) {
  const el = document.getElementById("repo-template").innerHTML
  const template = Handlebars.compile(el)
  const repoList = template(json)
  document.getElementById("results").innerHTML = repoList
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  fetch(repo, {
    method: 'POST',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(response => response.json()).then(json => showResults(json))
}

function showForkedRepo(json) {

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
