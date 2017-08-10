const username = "ldgarber"; 
const fork = `${username}/javascript-fetch-lab`

function getIssues() {
  fetch('https://api.github.com/repos/' + fork + '/issues')
    .then(res => res.json())
    .then(json => showIssues(json)); 
}

function showIssues(json) {
  var template = Handlebars.compile(document.getElementById("issues-template").innerHTML); 
  document.getElementById("issues").innerHTML = template(json); 
}

function createIssue() {
  var token = getToken(); 
  var issueTitle = document.getElementById("title").value; 
  var issueBody = document.getElementById("body").value; 
  fetch('https://api.github.com/repos/' + fork + '/issues', {
    method: 'post', 
    title: issueTitle, 
    body: issueBody, 
    headers: {
      Authorization: `token $(token)` 
    }
  }).then(res => res.json())
  .then(json => showIssues(json)); 
}

function showResults(json) {
  var resultsTemplate = Handlebars.compile(document.getElementById("repo-template").innerHTML); 
  document.getElementById("results").innerHTML = resultsTemplate(json); 
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'; 
  var token = getToken(); 
  //use fetch to fork it!
  fetch('https://api.github.com/repos/' + repo + '/forks', {
    method: 'post', 
    headers: {
      Authorization: `token $(token)` 
    }
  }).then(res => res.json())
  .then(json => showResults(json)); 
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
