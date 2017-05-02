function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
  var repoDiv = document.getElementById('repo-template').innerHTML;
  var template = Handlebars.compile(repoDiv);
  document.getElementById('results').innerHTML += template(json);
}

function forkRepo() {
  const token = getToken();
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
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
  return '3653deff3d08d342017abe94948d9fd39d11a4f0'
}
