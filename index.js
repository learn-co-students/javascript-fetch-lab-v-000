function buildRepoURL(owner, resource) {
  const baseURL = "https://api.github.com";
  const labSlug = "javascript-fetch-lab";
  return `${baseURL}/repos/${owner}/${labSlug}/${resource}`;
}

function getIssues() {
  fetch(buildRepoURL("kjleitz", "issues"))
    .then(data => data.json())
    .then(showIssues);
}

function showIssues(json) {
  const template = document.getElementById('issues-template').innerHTML;
  const builder = Handlebars.compile(template);
  const issuesDiv = document.getElementById('issues');
  issuesDiv.innerHTML = builder(json);
}

function createIssue() {
  fetch(buildRepoURL("kjleitz", "issues"), {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: {
      title: document.getElementById('title').value,
      body: document.getElementById('body').value
    }
  }).then(data => getIssues());
}

function showResults(json) {
  const template = document.getElementById('repo-template').innerHTML;
  const builder = Handlebars.compile(template);
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = builder(json);
}

function forkRepo() {
  fetch(buildRepoURL("learn-co-curriculum", "forks"), {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then((data) => {
    return data.json();
  }).then(showResults);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
