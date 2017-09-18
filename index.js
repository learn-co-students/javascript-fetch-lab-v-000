function getIssues(){
  console.log("issues")
  const token= getToken()
  fetch(`https://api.github.com/repos/samsonyuwono/javascript-fetch-lab/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => showIssues(res));
}

function showIssues(json) {
  var theIssues = ""
  for (var i = 0; i < json.length; i++) {
    theIssues = theIssues+` title: ${json[i].title} body: ${json[i].body}`
  }
  $("#issues").append(theIssues)
}


function createIssue() {
  owner = document.getElementById("results").innerText
  theTitle= document. getElementById("title").value
  theBody = document.getElementById("body").value
  const postData = {title: theTitle, body : theBody}
  const repo = 'samsonyuwono/javascript-fetch-lab'
  const token= getToken()
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => getIssues(res));
}


function showResults(json) {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  $('#results').append(
    `<h3>Forked Successfully!</h3><a href="https://api.github.com/repos/${repo}/forks"> ${repo}</a>`
  )}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token= getToken()
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => showResults(res));
}


function getToken() {


  return ''
}
