function getIssues(res) {
  var myrepo = 'javascript-fetch-lab'
  fetch(`https://api.github.com/repos/chipsaboy/${myrepo}/issues`).
    then(res => {res.json().
      then( data => {showIssues(data)})})
}


function showIssues(res) {
  document.getElementById("issues").innerHTML = ""
  var results = "<ul>"
  res.forEach(issue => {
    results += `<li>${issue.title}</li>`
  })
  results += "</ul>"
  document.getElementById("issues").innerHTML = results
}

function createIssue() {
  var title = document.getElementById('title').value
  var body = document.getElementById('body').value
  var postData = { title: title, body: body }

  var myrepo = 'javascript-fetch-lab'
  fetch(`https://api.github.com/repos/chipsaboy/${myrepo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(res => getIssues(res))
}

function forkRepo() {
  const repo = 'javascript-fetch-lab'
  fetch(`https://api.github.com/repos/learn-co-curriculum/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(res => showForkedRepo(res));
}

function showForkedRepo(res){
  document.getElementById("results").innerHTML = `<a href="${res.url}">${res.url}</a>`
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
