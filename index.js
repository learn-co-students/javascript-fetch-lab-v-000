function getIssues() {
  fetch('/api.github.com/repos/javascript-fetch-lab/issues', {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => console.log(json));
}

function showIssues(json) {
}

function createIssue() {
  var issueTitle = document.getElementById("title").value;
  var issueBody = document.getElementById("body").value;
  const issueData = {
    title: issueTitle,
    body: issueBody
  }
  fetch('/api.github.com/repos/javascript-fetch-lab/issues', {
    method: 'post',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => console.log(res));
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('/api.github.com/repos/' + repo, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
