function getIssues() {
  const repo = 'briecoyle/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}/issues`)
  .then(res => res.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  console.log(json)
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  const repo = 'briecoyle/javascript-fetch-lab'
  const issueTitle = document.getElementById("title").value
  const issueBody = document.getElementById("body").value
  const postData = { title: issueTitle, body: issueBody }

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  })
  .then(res => getIssues())
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
