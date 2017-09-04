// const token = keep blank
// fetch('https://api.github.com/user/repos', {
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(res = res.json()).then(json => console.log(json))
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showForkedRepo(json))
}

function showForkedRepo(json) {
  console.log(json)
  $("#results").append(`<h3>${json.owner.login}</h1><p id="forked_repo_url"><a href=${json.html_url}>${json.html_url}</a></p>`)
}

function getIssues() {
  var repo = 'ageorge0160/javascript-fetch-lab'
  fetch(`https://github.com/repos/${repo}/issues`, {
    method: 'get',
    headers: {
          Authorization:`token ${getToken()}`},
}
  ).then(res => res.json()).then(json => showIssues(json));

}

function showIssues(json) {
  $("#issues").append(`<h3>${json.owner.login}</h1> <p>${json.issues}</p>`)
}

function createIssue() {
  var title = document.getElementById("title").value
  var body = document.getElementById("body").value
  var repo = 'ageorge0160/javascript-fetch-lab'
  fetch(`https://github.com/repos/${repo}/issues`, {
    method: 'post',
    headers: {
          Authorization:`token ${getToken()}`},
    title: `title ${title}`,
    body: `body ${body}`
}
  ).then(res => res.json()).then(json => showIssues(json));

}

// function showResults(json) {
//   var template = Handlebars.compile(document.getElementById("repoTemplate").innerHTML)
//   document.getElementById("results").innerHTML = template(json)
// }
