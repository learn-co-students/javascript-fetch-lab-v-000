function getIssues() {
  fetch('https://api.github.com/repos/javascript-fetch-lab/issues', {
  headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => res.json()).then(json => console.log(json));
}

function showIssues(json) {
  console.log(json);
}

function createIssue() {
  const data = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  }
  fetch('https://api.github.com/repos/FreeBreadsticks/javascript-fetch-lab/issues', {
    method: /post/,
    body: JSON.stringify(data),
    headers: {

      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showResults(json) {
  console.log(json.html_url);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {
    method: /post/,
  headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => res.json()).then(json => showResults(json));
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
