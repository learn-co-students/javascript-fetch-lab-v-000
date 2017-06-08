// const postData = {
//   body: "Great stuff"
// };
//
// fetch('https://api.github.com/repos/williammena/javascript-fetch-lab-v-000/commits/master/comments', {
//   method: "POST",
//   body: JSON.stringify(postData),
//
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(json => console.log(json))

const mainRepo = 'learn-co-curriculum/javascript-fetch-lab'
const repo = "javascript-fetch-lab"
const base = "https://api.github.com/repos"
const user = "WilliamMena/javascript-fetch-lab"


function getIssues() {
  fetch(`${base}/${user}/issues`)
  .then(res => res.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  template = Handlebars.compile(document.getElementById("issues-template").innerHTML)
  issueInfo = template(json)
  document.getElementById("issues").innerHTML = issueInfo
}

function createIssue() {

  var issueTitle = document.getElementById("title").value
  var issueBody = document.getElementById("body").value
  // var user = document.getElementById("owner").innerText.replace(/\s/g,'')
  const postData = { title: issueTitle, body: issueBody }

  fetch(`${base}/${user}/issues`, {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  })
  getIssues();
}

function showResults(json) {

  template = Handlebars.compile(document.getElementById("repo-template").innerHTML)
  repoInfo = template(json)
  document.getElementById("results").innerHTML = repoInfo
}

function forkRepo() {
  //use fetch to fork it!
  fetch(`${base}/${mainRepo}/forks`, {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  
  return ''
}
