const api_url_stub = 'https://api.github.com/'
const owner = ''
const repository = 'javascript-fetch-lab'

function getIssues() {
  fetch(`${api_url_stub}repos/${owner}/${repository}/issues`).
    then(resp => resp.json()).
    then(json => showIssues(json))
}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  fetch(`${api_url_stub}repos/${owner}/${repository}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => getIssues());
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
  console.log(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${api_url_stub}repos/${repo}/forks`, {
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
