function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  const owner = 'jcpny1';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${owner}/${repo}/forks`, {
    method: 'POST',
    headers: { Authorization: `token ${token}` }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '25ca21847f1c554e6bd13d33e95110a26d518964'
}
