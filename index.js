function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
  debugger;
  var repoDiv = document.getElementById('repo-template').innerHTML;
  var template = Handlebars.compile(repoDiv);
  document.getElementById('results').innerHTML += template(repoDiv);
}

function forkRepo() {
  const token = getToken();
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
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
