function getIssues(results) {
  const token = getToken()
  fetch(`https://api.github.com/repos/curlywallst/javascript-fetch-lab/issues`, {
      method: 'get',
      headers: {
        Authorization: `token ${token}`
      }
    }).then(res => res.json()).then(res => showIssues(res))
  }

function showIssues(json) {
  var theIssues = ""
  for (var i = 0; i < json.length; i++) {
    theIssues = theIssues+` title: ${json[i].title} body: ${json[i].body}`
  }
  $("#issues").html(theIssues)
}

function createIssue() {
  owner = document.getElementById("results").innerText
  theTitle = document.getElementById("title").value
  theBody = document.getElementById("body").value
  const postData = {title: theTitle, body: theBody}
  const token = getToken()
  fetch(`https://api.github.com/repos/curlywallst/javascript-fetch-lab/issues`, {
      method: 'post',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${token}`
      },
    }).then(res => getIssues(results))
}

function showResults(json) {
  const token = getToken()
  fetch(json.url, {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(res => {$("#results").html(res[0].url)})
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken()
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => showResults(res))
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
