function getIssues() {
  const token = getToken();
  fetch(`https://api.github.com/repos/aml7733/javascript-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(showIssues());
}

function showIssues(json) {
  var template = Handlebars.compile(document.getElementById('issues-template').innerHTML);
  var result = template(issues);
  document.getElementById("issues").innerHTML += result;
}

function createIssue() {
  const token = getToken();
  var issTitle = document.getElementById("title").value
  var issBody = document.getElementById("body").value
  fetch("http://api.github.com/aml7733/javascript-fetch-lab/issues", {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    },
    title: issTitle,
    body: issBody
  })
}

function showResults(json) {
  var template = Handlebars.compile(document.getElementById('repo-template').innerHTML);
  var result = template(issues);
  document.getElementById("results").innerHTML += result;
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab';
  const token = getToken();
  fetch(repo, {
    method: "post",
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(showResults());
}

function getToken() {

  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
