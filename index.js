const fork = 'denisedearman/javascript-fetch-lab'
function getIssues() {
  fetch(`https://api.github.com/repos/${fork}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => {
   return resp.json()
 }).then (json => showIssues(json))
}

function showIssues(json) {
  var issueTemplate = json.map(issue=>{
    return `<p>Title: ${issue.title} - ${issue.body}</p>`
  })
  document.getElementById("issues").innerHTML = issueTemplate
}

function createIssue() {
  var title = document.getElementById("title").value
  var body = document.getElementById("body").value
  var postData = {title: title, body: body}

  fetch(`https://api.github.com/repos/${fork}/issues`, {
  method: 'post',
  body: JSON.stringify(postData),
  headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => {
  return res.json();
}).then(json => getIssues())
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {
  method: 'post',
  headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => {
  return res.json();
}).then(json => {
  showForkedRepo(json);
})
}

function showForkedRepo(response){
  var linkTemplate = '<li><a href="response.url>"response.url</a>'
  $('#results').append(linkTemplate);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
