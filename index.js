const userName = ''
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

function Issue(attributes){
  this.title = attributes.title;
  this.body = attributes.body;
  this.url = attributes.url;
}

function getIssues() {
  fetch(`${baseApi}repos/${fork}/issues`).
   then(resp => {
     resp.json().then( data => {
         showIssues(data);
     } )
   })
}

function showIssues(json) {
    var issuesTemplate = Handlebars.compile(document.getElementById("issues-template").innerHTML)
    var issuesResults = issuesTemplate({issues: json})
    document.getElementById("issues").innerHTML = issuesResults
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
    const issueBody = document.getElementById('body').value
    const postData = { title: issueTitle, body: issueBody }
    fetch(`${baseApi}repos/${fork}/issues`, {
      method: 'post',
      headers: {
        'Authorization': `token ${getToken()}`
      },
      body: JSON.stringify(postData)
    }).then(resp => getIssues())
}

function showResults(json) {
  // console.log (json)
  var template = Handlebars.compile(document.getElementById("repo-template").innerHTML)
  var results = template(json)
  document.getElementById("results").innerHTML = results
}

function forkRepo() {
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {

    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json))
  //use fetch to fork it!
}

function getToken() {
  return '';
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass

}
