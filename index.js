function getIssues() {
  fetch(`https://api.github.com/repos/AleksandrRogachev94/javascript-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  console.log(json)
  let template = Handlebars.compile(document.getElementById("issues-template").innerHTML)
  document.getElementById("issues").innerHTML = template(json)
}

function createIssue() {

  const issueData = {
    title: document.getElementById("title").value,
    body: body = document.getElementById("body").value
  }

  fetch(`https://api.github.com/repos/AleksandrRogachev94/javascript-fetch-lab/issues`, {
    method: "post",
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(() => getIssues())
}

function showResults(json) {
  //string = JSON.stringify(json)
  console.log(json)
  let template = Handlebars.compile(document.getElementById("repo-template").innerHTML)
  document.getElementById("results").innerHTML = template(json)

}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  var promise = fetch("https://api.github.com/repos/" + repo + "/forks", {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json))
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''//'a8b21da82e253d3dda5ed7b0acb30fd3c90b9aeb'
}
