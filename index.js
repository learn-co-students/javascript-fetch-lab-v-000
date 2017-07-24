const githubUrl = "https://api.github.com"

function getIssues() {
  const token = getToken()
  fetch(`${githubUrl}/repos/Jschles1/javascript-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  const src = document.getElementById("issues-template").innerHTML
  const template = Handlebars.compile(src)
  document.getElementById("issues").innerHTML = template(json)
}

function createIssue() {
  const token = getToken()
  const issueTitle = document.getElementById("title").value
  const issueBody = document.getElementById("body").value
  fetch(`${githubUrl}/repos/Jschles1/javascript-fetch-lab/issues`, {
    method: 'POST',
    title: JSON.stringify(issueTitle),
    body: JSON.stringify(issueBody),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => getIssues());
}

function showResults(json) {
  const src = document.getElementById("repo-template").innerHTML
  const template = Handlebars.compile(src)
  document.getElementById("results").innerHTML = template(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken()
  //use fetch to fork it!
  fetch(`${githubUrl}/repos/${repo}/forks`, {
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
