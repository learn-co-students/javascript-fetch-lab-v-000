function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(repo, {
    headers: {
      Authorization: `token: ${getToken()}`
    }
  }).then(response => response.json()).then(json => console.log(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '50e94b3d681be4dc1bcd33e20c54ab0242d03f4d'
}
