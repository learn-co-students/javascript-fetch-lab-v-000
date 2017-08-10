const userName= 'szeidman'

function getIssues() {
  const repo = 'https://api.github.com/repos/learn-co-students/javascript-fetch-lab/issues'
  fetch(repo, {
    method: 'get',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(res => showIssues(json))
}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML);
  var issue = template(json);
  document.getElementById("issues").innerHTML += issue;
}

function createIssue() {
  const repo = 'https://api.github.com/repos/szeidman/javascript-fetch-lab/issues';
  const data = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  fetch(repo, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(res => getIssues())
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById("repo-template").innerHTML);
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  //use fetch to fork it!
  fetch(repo, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(res => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

function showForkedRepo() {
  document.getElementById('results')
}
