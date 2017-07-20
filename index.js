function getIssues() {
  fetch(`https://api.github.com/repos/sensei100/javascript-fetch-lab/issues`)
    .then(response => response.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById("issues-template").innerHTML)
  document.getElementById("issues").innerHTML = template(json)
}

function createIssue() {
  const title = document.getElementById("title").value
  const body = document.getElementById("body").value
  const postData = { 
    title: title,
    body: body
  }

  fetch(`https://api.github.com/repos/sensei100/javascript-fetch-lab/issues`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(issues => getIssues());
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById("repo-template").innerHTML)
  document.getElementById("results").innerHTML = template(json)
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  //use fetch to fork it!
  fetch(repo, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(response => response.json())
    .then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
