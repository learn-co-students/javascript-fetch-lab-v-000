function getIssues() {
  fetch('https://api.github.com/repos/TraiLYNNE/javascript-fetch-lab/issues', {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  var issues = document.getElementById('issues-template').innerHTML;
  
  var template = Handlebars.compile(issues);
  
  var result = template(json);
  
  issues.innerHTML = result;
}

function createIssue() {
  const issue = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  
  fetch('https://api.github.com/repos/TraiLYNNE/javascript-fetch-lab/issues', {
    method: 'post',
    body: JSON.stringify(issue),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => getIssues());
}

function showResults(json) {
  var repo = document.getElementById('repo-template').innerHTML;
  
  var template = Handlebars.compile(repo);
  
  var result = template(json);
  
  results.innerHTML = result;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
