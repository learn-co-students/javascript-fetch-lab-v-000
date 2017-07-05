function getIssues() {
  const repo = 'https://api.github.com/repos/LatinaDeveloper/javascript-fetch-lab/issues'
  fetch(repo, {
    method: 'get',
    headers: { Authorization: `token ${getToken()}` }
  }).then(res => showIssues(results))//use fetch to fork it!
}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  const repo = 'https://api.github.com/repos/LatinaDeveloper/javascript-fetch-lab/issues'
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  fetch(repo, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: { Authorization: `token ${getToken()}` }
  }).then(res => getIssues())//use fetch to fork it!
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  fetch(repo, {
    method: 'post',
    headers: { Authorization: `token ${getToken()}` }
  }).then(res => showResults(results))//use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
