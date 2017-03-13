function getIssues() {
	const uri = 'https://api.github.com/repos/adamfriedl/javascript-fetch-lab/issues'
	fetch(uri, {
		headers: {
			Authorization: `token ${getToken()}`
		}}).then(resp => resp.json()).then(json => showIssues(json))
}

function showIssues(json) {
	const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)

	document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
	const uri = 'https://api.github.com/repos/adamfriedl/javascript-fetch-lab/issues'
	const issueTitle = document.getElementById('title').value
	const issueBody = document.getElementById('body').value
	const postData = {title: issueTitle, body: issueBody}
	fetch(uri, {
		method: 'post',
		body: JSON.stringify(postData),
		headers: {
			Authorization: `token ${getToken()}`
		}}).then(resp => resp.json()).then(json =>getIssues())
}

function showResults(json) {
	const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)

	document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('https://api.github.com/repos/' + repo + '/forks', {
  	method: 'post',
  	headers: {
  		Authorization: `token ${getToken()}`
  	}
  }).then(resp => resp.json()).
  	then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return '703b1e2f59f63be7a11b6b45a3e337a40a5da9e3'
  return ''
}
