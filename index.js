function getIssues() {
  const repo = 'javascript-fetch-lab';
  const token = getToken();
  fetch(`api.github.com/repos/squirrelnest/${repo}/issues`, {
    method: 'GET',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res));
}

function showIssues(json) {
  var template = Handlebars.compile(document.getElementById("issues-template").innerHTML);
  var issue = template(json);
  document.getElementById("issues").innerHTML += issue;
}

function createIssue() {
  const repo = 'javascript-fetch-lab'
  const token = getToken();
  const postData = document.getElementById('body').value;

  fetch(`api.github.com/repos/squirrelnest/${repo}/issues`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res));
}

function showResults(json) {
  var template = Handlebars.compile(document.getElementById("repo-template").innerHTML);
  var result = template(json);
  document.getElementById("results").innerHTML += result;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  const token = getToken();
  fetch(`api.github.com/repos/${repo}`, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
