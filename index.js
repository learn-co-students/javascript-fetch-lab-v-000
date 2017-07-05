'use strict';
const apiBase = 'https://api.github.com/repos'
const fork = 'itzsaga/javascript-fetch-lab'
function getIssues () {
  fetch(`${apiBase}/${fork}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues (json) {
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue () {
  const data = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  fetch(`${apiBase}/${fork}/issues`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => getIssues())
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo () {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${apiBase}/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken () {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
