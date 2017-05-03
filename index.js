const token = getToken();
const newRepo = 'bhabig/javascript-fetch-lab';

// getIssues is necessary to collect ALL of the repo's issues, otherwise create would call show to display the single, newly created issue.
function getIssues() {
  fetch(`https://api.github.com/repos/${newRepo}/issues`)
    .then(res => res.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
  const issuesDiv = document.getElementById('issues-template').innerHTML;
  const template = Handlebars.compile(issuesDiv);
  document.getElementById('issues').innerHTML = template(json);
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
  return ''
}
