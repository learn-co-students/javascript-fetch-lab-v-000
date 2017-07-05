const repo = 'learn-co-curriculum/javascript-fetch-lab'
const ghname = 'bortch89'
const fork = `${ghname}/javascript-fetch-lab`

function getIssues() {
  fetch(`https://api.github.com/repos/${fork}/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json())
  .then(json => showIssues(json));
}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  const postData = {
    body: document.getElementById("title").value,
    title: document.getElementById("body").value
  }

  fetch(`https://api.github.com/repos/${fork}/issues`, {
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
}

function forkRepo() {
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
