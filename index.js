const urlPrefix = "https://api.github.com/repos"
const repo = `javascript-fetch-lab`
const user = "DanL12186"

function getIssues() { //no need for 'get' method or authorization; get is default and this is pubic.
  fetch(`${urlPrefix}/${user}/${repo}/issues`)
  .then(response => response.json()) //parse response into json format
  .then(json => showResults(json)) //pass parsed rseponse to showResults()
}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById("issues-template").innerHTML);
  const issues = template(json);

  document.getElementById("issues").innerHTML = issues;
}

function createIssue() {
  const title = document.getElementById('title').value; //grabs title and body values from HTML
  const body = document.getElementById('body').value;
  const postData = { //places it into a postData variable
    body: body,
    title: title
  }

  fetch(`${urlPrefix}/${user}/${repo}/issues`, { //fetches URL for this repo
    method: 'post',
    body: JSON.stringify(postData),   //sets body to above postData; JSON.stringify necessary for it to work
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => getIssues())
}

function showResults(json) { //called by forkRepo's last line, receives json as argument
  const template = Handlebars.compile(document.getElementById("repo-template").innerHTML);
  const results = template(json);  //creates template with json argument data
  //console.log(json)
  document.getElementById("results").innerHTML = results;  //fills results div with json data
}

function forkRepo() { //forks repository
  fetch(`${urlPrefix}/learn-co-curriculum/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}` //"Authorization" a required word
    }
  })
  .then(response => response.json()) //parse response into json format
  .then(json => showResults(json)) //pass parsed rseponse to showResults()

}

function getToken() {
  return ''
}
