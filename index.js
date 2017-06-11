function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
  console.log(json);
}

function forkRepo() {
  const owner = 'learn-co-curriculum';
  const repo  = 'javascript-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${owner}/${repo}/forks`, {
    method: 'POST',
    headers: { Authorization: `token ${getToken()}` }
  }).then(res => res.json()).then(json => showResults(json));
  // const token = getToken();
  // fetch('https://api.github.com/user/repos', {
  //   headers: {
  //     Authorization: `token ${token}`
  //   }
  // }).then(res => res.json()).then(json => console.log(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
