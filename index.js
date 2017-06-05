function getIssues() {
  const repo = 'phreemason/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));)
}

function showIssues(json) {

}

function createIssue() {


}

function showResults(json) {

}

function forkRepo() {

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
