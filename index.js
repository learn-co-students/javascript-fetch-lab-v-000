//6dfd2a9c7e82bb9493654ac356e36398c26e4c19
function getIssues() {
  fetch(`https://api.github.com/repos/tehcoyote/javascript-fetch-lab/issues`).then(resp => {
    resp.json().then( data => {
      showIssues(data)
    });
  });
}

function showIssues(json) {
  var template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  const issueTitle = document.getElementById("title").value
  const issueBody = document.getElementById("body").value
  const postData = {title: issueTitle, body: issueBody}
  fetch(`https://api.github.com/repos/tehcoyote/javascript-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: "token " + getToken()
    }
  }).then(res => console.log(res))
}

function showResults(json) {
  var template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  const token = getToken()
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
