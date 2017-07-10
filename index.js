const userName = ''
const baseAPI = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

function Issue(attributes) {
  this.title = attributes.title
  this.url = attributes.url
  this.body = attributes.body
}

function Repo(attributes) {
  this.url = attributes.url
}

Issue.prototype.template = function() {
  var template = `<li>Title: <a href="${this.url}">${this.title} </a><span> | Body: ${this.body}</span></li>`
  return template;
}

Repo.prototype.template = function() {
  var template = `<h3>Forked Successfully!</h3><a href="${this.url}"> ${this.url}</a>`
  return template;
}

function getIssues() {
  fetch(`https://api.github.com/repos/${fork}/issues`).
    then(resp => {
      resp.json().then(data => {
        for (let i = 0; i < data.length; i++) {
          showIssues(new Issue(data[i]))
        }
      })
    })
}

function showIssues(issue) {
  $("#issues").append(issue.template())
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = {title: issueTitle, body: issueBody}
  fetch(`${baseAPI}repos/${fork}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => {
    let repo = new Repo(resp)
    showForkedRepo(repo)
  })
}

function showForkedRepo(repo) {
  $("#results").append(repo.template())
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
