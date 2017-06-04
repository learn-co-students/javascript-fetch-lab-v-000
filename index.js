// const token = '1bf76c98b8a0239c47a1ab2005c66cc842d2b21c';
 
// function getIssues() {
//   const repo = 'learn-co-curriculum/javascript-fetch-lab'
//   const url = 'https://api.github.com/'
//   fetch(`${url}repos/${repo}/issues`).then(resp => resp.json()).then(json => showIssues(json))
// }

// function showIssues(json) {
//   const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
//   document.getElementById('issues').innerHTML = template(json)
// }

// function createIssue() {
//   const repo = 'learn-co-curriculum/javascript-fetch-lab'
//   const url = 'https://api.github.com/'
//   const issueTitle = document.getElementById('title').value
//   const issueBody = document.getElementById('body').value
//   const postData = { title: issueTitle, body: issueBody }
  
//   fetch(`${url}repos/${repo}/issues`, {
//   method: 'POST',
//   headers: {
//     Authorization: `token ${token}`
//   },
//   body: JSON.stringify(postData)
// }).then(getIssues())
// }

// // function createIssue() {
// //   const issueTitle = document.getElementById('title').value
// //   const issueBody = document.getElementById('body').value
// //   const postData = { title: issueTitle, body: issueBody }

// //   fetch(`${baseApi}repos/${fork}/issues`, {
// //     method: 'post',
// //     headers: {
// //       Authorization: `token ${getToken()}`
// //     },
// //     body: JSON.stringify(postData)
// //   }).then(resp => getIssues())
// // }

// function showResults(json) {
//   var formTemplate = document.getElementById("repo-template").innerHTML
//   var template = Handlebars.compile(formTemplate)
//   document.getElementById('results').innerHTML = template(json)
// }

// function forkRepo() {
//   const repo = 'learn-co-curriculum/javascript-fetch-lab'
//   const url = 'https://api.github.com/'
//   fetch(`${url}repos/${repo}/forks`, {
//   method: 'POST',
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(resp => resp.json()).then(json => showResults(json))

// }

// function getToken() {
//   //change to your token to run in browser, but set
//   //back to '' before committing so all tests pass
//   return ''
// }




const userName = ''
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

function getIssues() {

  fetch(`${baseApi}repos/${fork}/issues`).
    then(resp => resp.json()).
    then(json => showIssues(json))
}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }

  fetch(`${baseApi}repos/${fork}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`${baseApi}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).
    then(json => showResults(json))
}

function getToken() {
  return ''
}
