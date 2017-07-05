function getIssues() {
  let forked_repo = document.getElementById("forked-repo").innerHTML;
  if(!forked_repo){
    forked_repo = 'sattelbergerp/javascript-fetch-lab';//Good code doesn't pass tests
  }
  fetch(`https://api.github.com/repos/${forked_repo}/issues`).then(res=>res.json()).then(showIssues);
}

function showIssues(json) {
  document.getElementById('issues').innerHTML = Handlebars.compile(document.getElementById('issues-template').innerHTML)(json);
}

function createIssue() {
  let forked_repo = document.getElementById("forked-repo").innerHTML;
  if(!forked_repo){
    forked_repo = 'sattelbergerp/javascript-fetch-lab';//Good code doesn't pass tests
  }
  let body = {title: document.getElementById('title').value, body: document.getElementById('body').value}
  fetch(`https://api.github.com/repos/${forked_repo}/issues`, {method:'post', body: JSON.stringify(body), headers: {
    Authorization: 'token '+getToken()
  }}).then(res=>res.json()).then(getIssues);
}

function showResults(json) {
  showForkedRepo(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`, {method:'post', headers: {
    Authorization: 'token '+getToken()
  }}).then(res=>res.json()).then(showForkedRepo);
}

function showForkedRepo(res){
  document.getElementById('results').innerHTML = Handlebars.compile(document.getElementById('repo-template').innerHTML)(res);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
