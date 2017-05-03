const token = getToken();
const newRepo = 'bhabig/javascript-fetch-lab';

function getIssues() {
  debugger;
}

function showIssues(json) {
  const issuesDiv = document.getElementById('issues-template').innerHTML;
  const template = Handlebars.compile(issuesDiv);
  document.getElementById('issues').innerHTML += template(json);
}

function createIssue() {
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  const postData = {title: issueTitle, body: issueBody};
  fetch(`https://api.github.com/repos/${newRepo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showIssues(json))
}

function showResults(json) {
  const repoDiv = document.getElementById('repo-template').innerHTML;
  const template = Handlebars.compile(repoDiv);
  document.getElementById('results').innerHTML = template(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
    fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '351b5ea85aa8f563282605121783a45372c20dda'
}
