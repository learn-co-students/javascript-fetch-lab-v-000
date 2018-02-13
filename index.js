function getIssues() {
  fetch('javascript-fetch-lab/issues', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(resp => resp.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
  const template = Handlebars.complile(document.getElementById('issues-template').innerHTML);
  document.getElementById('issues').innerHTML = template(json);
}

function createIssue() {
  fetch('javascript-fetch-lab/issues', {
    method: 'post',
    body: 'test body',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(resp => getIssues())
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML);
  document.getElementById('results').innerHTML = template(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('/api.github.com/repos/' + repo, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(resp => resp.json())
    .then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

const token = getToken();
