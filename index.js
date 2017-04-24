function getIssues() {

  fetch(`https://api.github.com/repos/jmb521/javascript-fetch-lab/issues`).
    then(resp => resp.json).then(resp => showIssues(json))

}

function showIssues(json) {
  const issueTemplate = Handlebars.compile(document.getElementById("issues-template").innerHTML)
  document.getElementById("issues").innerHTML = issueTemplate(json)
}

function createIssue() {
  const title = document.getElementById("title").value
  const body = document.getElementById("body").value
  const data = {title: title, body: body}
  fetch("https://api.github.com/jmb521/javascript-fetch-lab/issues", {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(data)
  }).then(resp => getIssues())
}

function showResults(json) {
  const repoTemplate = Handlebars.compile(document.getElementById("repo-template").innerHTML)
  document.getElementById("results").innerHTML = repoTemplate(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp =>resp.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
    return ''
}
