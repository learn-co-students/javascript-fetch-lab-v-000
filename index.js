function getIssues() {
  const repo = 'walwoodr/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  var template = Handlebars.compile(document.getElementById("issues-template").innerHTML);
  document.getElementById("issues").innerHTML = template(json);
}

function createIssue() {
  const repo = 'walwoodr/javascript-fetch-lab';
  var title = {

    title: `${document.getElementById("title").value}`};
  console.log(title);
  var body = {body: `${document.getElementById("body").value}`};
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    "title": JSON.stringify(title),
    "body": JSON.stringify(body),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => getIssues());
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
  // return token;
  return ''
}

function showResults(json) {
  var template = Handlebars.compile(document.getElementById("repo-template").innerHTML);
  document.getElementById("results").innerHTML = template(json);
}
