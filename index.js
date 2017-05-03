const token = getToken();
const newRepo = '';

function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  fetch(`https://api.github.com/repos/${newRepo}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  })
}

function showResults(json) {
  newRepo = json.full_name;
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
