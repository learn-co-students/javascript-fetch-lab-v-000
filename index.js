function getIssues() {
  fetch('https://api.github.com/repos/hansenjl/javascript-fetch-lab/issues', {
    headers: {
      Authorization: `token ${getToken()}`
    }
 })
  .then(resp => resp.json())
  .then(json => console.log(json));
}

function showIssues(json) {
  document.getElementById("issues").innerHTML += `<h4>${json.title}</h4><p>${json.body}</p>`
}

function createIssue() {
  const postData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  }


  fetch('https://api.github.com/repos/hansenjl/javascript-fetch-lab/issues', {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(res => showIssues(res))
}

function showResults(json) {
  let repo_url = json.html_url
  document.getElementById("results").innerHTML = `<a href="${repo_url}">${json.name}</a>`
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  fetch(repo, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(res => showResults(res))
}

function getToken() {

  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
