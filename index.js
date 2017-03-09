function getIssues() {
  fetch("https://api.github.com/repos/BeejLuig/javascript-fetch-lab/issues").then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  var src = document.getElementById("issues-template").innerHTML;
  var template = Handlebars.compile(src);
  var html = template(json);
  console.log(json)
  document.getElementById("issues").innerHTML = html;
}

function createIssue() {
  var title = document.getElementById("title").value;
  var body = document.getElementById("body").value;


  fetch("https://api.github.com/repos/BeejLuig/javascript-fetch-lab/issues", {
    method: 'post',
    body: JSON.stringify({
      title: title,
      body: body
    }),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(getIssues());
}

function showResults(json) {
  var src = document.getElementById("repo-template").innerHTML;
  var template = Handlebars.compile(src);
  var html = template(json);
  document.getElementById("results").innerHTML = html;
}

function forkRepo() {
  //use fetch to fork it!
  fetch("https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks", {
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
