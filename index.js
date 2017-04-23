function getIssues() {
  fetch("https://api.github.com/repos/ivanpilot/javascript-fetch-lab/issues").then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  var template = Handlebars.compile(document.getElementById("issues-template").innerHTML)
  var issueList = template(json)
  document.getElementById("issues").innerHTML = issueList
}

function createIssue() {
  // var title = document.getElementById("title").value
  // var body = document.getElementById("body").value

  // const token = "9f3e97ef6dfabd82993a488a0a525eb990891d21";
  var postIssue = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  };
// debugger;
  fetch('https://api.github.com/repos/ivanpilot/javascript-fetch-lab/issues', {
    method: 'post',
    body: JSON.stringify(postIssue),
    headers:{
      Authorization: `token ${getToken()}`
    }
  }).then(res => console.log(res));

}

function showResults(json) {
  var template = Handlebars.compile(document.getElementById("repo-template").innerHTML)
  var repoList = template(json)
  document.getElementById("results").innerHTML = repoList
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  // const repo = 'learn-co-students/javascript-fetch-lab-v-000'
  //use fetch to fork it!
  fetch("https://api.github.com/repos/" + repo + "/forks", {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return "9f3e97ef6dfabd82993a488a0a525eb990891d21"
  return ''
}
