const repo = 'learn-co-curriculum/javascript-fetch-lab'

function getIssues() {
	fetch(`https://api.github.com/repos/warrend/javascript-fetch-lab/issues`).then(response => response.json).then(json => showIssues(json))
}

function showIssues(json) {
	const issueData = document.getElementById('issues-template').innerHTML
	const temp = Handlebars.compile(issueData)
	const issues = temp(json)
	document.getElementById('issues').innerHTML += issues
}

function createIssue() {
	const issueTitle = document.getElementById('title').value
	const issueBody = document.getElementById('body').value
	const issueData = { title: issueTitle, body: issueBody }

	fetch(`https://api.github.com/repos/warrend/javascript-fetch-lab/issues`, {
		method: 'post',
		headers: {
			Authorization: `token ${getToken()}`
		}, 
		body: JSON.stringify(issueData)
	}).then(response => getIssues())
}

function showResults(json) {
	const repoData = document.getElementById("repo-template").innerHTML
	const temp = Handlebars.compile(repoData)
	const results = temp(json)
	document.getElementById('results').innerHTML += results
}

function forkRepo() {
  fetch(`https://api.github.com/repos/${repo}/forks`, {
  	method: 'post',
  	headers: {
  		Authorization: `token ${getToken()}`
  	}
  }).then(response => response.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  //return '561b2f048c48580dc0d7dc51b1f5d53a5d58023e'
  return ''
}

// POST /repos/:owner/:repo/forks
