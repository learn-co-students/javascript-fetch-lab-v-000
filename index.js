const fork = 'howardbdev/javascript-fetch-lab'

function getIssues() {
  fetch(`https://api.github.com/repos/howardbdev/javascript-fetch-lab/issues`, {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(results => console.log(results));
}

function showIssues(json) {
  let template = Handlebars.compile(document.getElementById('issues-template').innerHTML);
  let issue = template(json);
  document.getElementById('issues').innerHTML += "<br>" + issue + "<br>";
}

function createIssue() {
  var postData = {title: document.getElementById('title').value, body: document.getElementById('body').value}
  debugger
  fetch(`https://api.github.com/repos/howardbdev/javascript-fetch-lab/issues`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(results => results.json())
    .then(results => console.log(results));
}

function showResults(json) {
  var template = Handlebars.compile(document.getElementById("repo-template").innerHTML);
  document.getElementById("results").innerHTML += template(json);
}

function Repo(attributes){
  this.attributes = attributes;
  this.url = attributes.url;
}

Repo.prototype.template = function() {
  var template = `<h3>Forked Successfully!</h3><a href="${this.url}"> ${this.url}</a>`
  return template;
};

const baseApi = 'https://api.github.com/'
function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`${baseApi}repos/${repo}/forks`, {
    // POST /repos/:owner/:repo/forks
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`,
    }
  }).then(resp => resp.json())
    .then(resp => {
    let repo = new Repo(resp);
    showForkedRepo(repo);
  })

}

function showForkedRepo(repo) {
  // console.log("in the showForkedRepo function, repo: " + repo)
  document.getElementById('results').append(repo.template())
}


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
