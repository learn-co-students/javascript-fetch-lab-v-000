// taken from solution, not mentioned in readme but essentiall
const userName = 'pcgeekbrain'
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

function getIssues() {
  fetch(`${baseApi}repos/${fork}/issues`).then(resp => {
    resp.json().then( data => {
      for (var i = 0; i < data.length; i++) {
        displayIssue({ title: data.title, body: data.body, url: data.url })
      }
    });
  });
}

function showIssues(json) {
  var template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  const issueTitle = document.getElementById("title").value
  const issueBody = document.getElementById("body").value
  const postData = {title: issueTitle, body: issueBody}
  fetch(`${baseApi}repos/${fork}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: "token " + getToken()
    }
  }).then(res => console.log(res))
}

function showResults(json) {
  var template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${baseApi}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: "token " + getToken()
    }
  }).then(res => {
    console.log(res);
  });
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
