const username = ''
const baseURL = 'https://api.github.com/'
const fork = `${username}/javascript-fetch-lab`

function Issue(attributes){
  this.title = attributes.title;
  this.body = attributes.body;
  this.url = attributes.url;
}

function Repo(attributes){
  this.url = attributes.url;
}

Issue.prototype.template = function() {
  var template = `<li>Title: <a href="${this.url}">${this.title} </a><span> | Body: ${this.body}</span></li>`
  return template
}

Repo.prototype.template = function(){
  var template = `<h3>Forked Successfully!</h3><a href="${this.url}"> ${this.url}</a>`
  return template;
};

function getIssues() {
  fetch(`${baseURL}repos/${fork}/issues`).
    then(res => res.json()).
    then(json => showIssues(json))
}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = {title: issueTitle, body: issueBody}

  fetch(`${baseURL}repos/${fork}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(res => getIssues())
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  //use fetch to fork it!
  fetch(`${baseURL}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => {
    console.log(res)
    let repo = new Repo(res);
    showForkedRepo(repo);
  })
}

function showForkedRepo(repo) {
  $('#results').append(repo.template());
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // const token = 73f5123bff5378182a190a7353f34f5c01646dba
  // return token
  return ''
}
