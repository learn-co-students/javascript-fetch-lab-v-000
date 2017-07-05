function getIssues() {
  fetch(`https://api.github.com/repos/hannah11361/javascript-fetch-lab/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => showIssues(json))
}

function showIssues(json) {
  var template = Handlebars.compile(document.getElementById("issues-template").innerHTML)
  var results = template(json)
  document.getElementById('results').innerHTML = results
}

function createIssue() {
  var issue = {
		"title": document.getElementById('title').value,
		"body": document.getElementById('body').value
	}

	fetch(`https://api.github.com/repos/hannah11361/javascript-fetch-lab/issues`, {
	    method: 'post',
	    headers: {
	      Authorization: `token ${getToken()}`
	    },
	    body: JSON.stringify(issue)
  	}).then(resp => getIssues())
}

function showResults(json) {
  var template = Handlebars.compile(document.getElementById("repo-template").innerHTML)
	var results = template(json)
	document.getElementById('results').innerHTML = results
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  fetch(repo, {
    method: 'post',
    headers: { Authorization: `token ${getToken()}` }
  }).then(resp => resp.json()).then(json => showResults(json))

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
