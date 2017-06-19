
const userName = 'kevinladkins'
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

function getIssues() {
fetch(`${baseApi}repos/${fork}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => showIssues(json));
}

function showIssues(json) {
  var template = Handlebars.compile(document.getElementById("issues-template").innerHTML)
  document.getElementById("issues").innerHTML = template(json)
}

function createIssue() {
  var issueTitle = document.getElementById("title").value;
  var issueBody = document.getElementById("body").value;
  var postData = {
    title: issueTitle,
    body: issueBody
  };
  console.log(JSON.stringify(postData))
  fetch(`${baseApi}repos/${fork}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}

function showResults(json) {
  var template = Handlebars.compile(document.getElementById("repo-template").innerHTML);
  var results = template(json);
  document.getElementById("results").innerHTML = results;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  fetch(`${baseApi}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
