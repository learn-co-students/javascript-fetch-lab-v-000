function getIssues() {
  const repo = 'https://api.github.com/repos/SYoung82/javascript-fetch-lab/issues';
  fetch(repo)
    .then(res => res.json())
    .then(json => showIssues(res));
}

function showIssues(json) {
  var templateScript = document.getElementById("issues-template").innerHTML;
  var template = Handlebars.compile(templateScript);
  document.getElementById("issues").innerHTML = template(json);
}

function createIssue() {
  const repo = 'https://api.github.com/repos/SYoung82/javascript-fetch-lab/issues';
  const issueTitle = document.getElementById("title").value;
  const issueBody = document.getElementById("body").value;
  fetch(repo, { method: "post", headers: { Authorization: `token ${getToken()}` },
                body: { title: issueTitle, body: issueBody }})
    .then(json => getIssues());
}

function showResults(json) {
  var templateScript = document.getElementById("repo-template").innerHTML;
  var template = Handlebars.compile(templateScript);
  document.getElementById("results").innerHTML = template(json);
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks';
  fetch(repo, { method: "post", headers: { Authorization: `token ${getToken()}` }})
    .then(res => res.json())
    .then(json => showResults(res));
}

function getToken() {   
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
