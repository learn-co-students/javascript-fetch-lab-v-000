function getIssues() {
  let forkedRepo = document.getElementById("results").children.forkedRepo.innerHTML
  fetch(`https://api.github.com/repos/${forkedRepo}/javascript-fetch-lab/issues`)
  .then(res => res.json())
  .then((issues) => showIssues(issues))
}

function showIssues(response) {
  let template = Handlebars.compile(document.getElementById("issues-template").innerHTML)
  let html = template(response)
  document.getElementById("issues").innerHTML = html

}
function createIssue() {
  let object = {body: document.getElementById('body').value, title: document.getElementById("title").value }
  let forkedRepo = document.getElementById("results").children.forkedRepo.innerHTML

  fetch(`https://api.github.com/repos/${forkedRepo}/javascript-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify(object),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then((response) => getIssues())
}

function showResults(json) {
  var template = Handlebars.compile(document.getElementById("repo-template").innerHTML)
  var html = template(json)
  document.getElementById("results").innerHTML = html
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    }

  }).then(res => res.json()).then((json) => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
