function getIssues() {
  var repoName = 'smendoza787/javascript-fetch-lab';
  // GET /repos/:owner/:repo/issues
  fetch(`https://api.github.com/repos/${repoName}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  var template = Handlebars.compile(document.getElementById('issues-template').innerHTML);
  document.getElementById('issues').innerHTML = template(json);
}

function createIssue() {
  var repoName = 'smendoza787/javascript-fetch-lab';
  var issueTitle = document.getElementById('title').value;
  var issueBody = document.getElementById('body').value;
  var postData = {
    title: issueTitle,
    body: issueBody
  };
  fetch(`https://api.github.com/repos/${repoName}/issues`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => getIssues());
}

function showResults(json) {
  var template = Handlebars.compile(document.getElementById('repo-template').innerHTML);
  document.getElementById('results').innerHTML = template(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  var url = `https://api.github.com/repos/${repo}/forks`;
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json())
    .then(json => showResults(json));
}

function showForkedRepo(jsonResult) {
  document.getElementById('results').innerHTML = showResults(jsonResult);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
