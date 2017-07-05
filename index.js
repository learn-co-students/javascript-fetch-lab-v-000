function getIssues() {
  fetch(`/javascript-fetch-lab/issues`).
    then(resp => resp.json()).
    then(json => showIssues(json))
}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById("issues-template").innerHTML)
  document.getElementById("issues").innerHTML = template(json)
}

function createIssue() {
  const issueTitle = document.getElementById("title").value
  const issueContent = document.getElementById("body").value
  const postData = {title: issueTitle, body: issueContent}

  fetch('https://api.github.com/repos/:owner/javascript-fetch-lab/issues', {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => getIssues());
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById("repo-template").innerHTML)
  document.getElementById("results").innerHTML = template(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json())
  .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
