const userName = 'snsavage'
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

function getIssues() {
  fetch(`${baseApi}repos/${fork}/issues`, {
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  const issuesTemplate = document.getElementById('issues-template').innerHTML;
  const template = Handlebars.compile(issuesTemplate);

  document.getElementById('issues').innerHTML = template(json);
}

function createIssue() {
  let postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

  fetch(`${baseApi}repos/${fork}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => getIssues(json));
}

function showResults(json) {
  const repoTemplate = document.getElementById('repo-template').innerHTML;
  const template = Handlebars.compile(repoTemplate);

  document.getElementById('results').innerHTML = template(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';

  fetch(`${baseApi}repos/${repo}/forks`, {
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
