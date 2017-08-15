const baseAPI = "https://api.github.com/repos/"
const user = ''
const testURL = `${user}/javascript-fetch-lab`

function getIssues() {
	var repo = document.getElementById('results').getElementsByTagName('a')[0].text

	fetch(`${baseAPI}${testURL}/issues`,{
		headers:{
			  		Authorization: `token ${getToken()}`
		}
	}).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
	const src = document.getElementById("issues-template").innerHTML
  	const template = Handlebars.compile(src)
  	const issueList = template(json)
  	debugger;
  	document.getElementById("issues").innerHTML = issueList
}

function createIssue() {
	var title = document.getElementById('title').value
	var textBody = document.getElementById('body').value
	var repo = document.getElementById('results').getElementsByTagName('a')[0].text
	var postData = { title: title, body: textBody }

	fetch(`${baseAPI}${testURL}/issues`,{
		method: 'POST',
		headers: {
			    	Authorization: `token ${getToken()}`
		},
		body: JSON.stringify(postData),
	}).then(res => getIssues())
}

function showResults(json) {
	const src = document.getElementById("repo-template").innerHTML
  	const template = Handlebars.compile(src)
  	const repoList = template(json)
  	document.getElementById("results").innerHTML = repoList
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${baseAPI}${repo}/forks`, {
  	method: 'POST',
  	headers: {
  		Authorization: `token ${getToken()}`
  	}
  }).then(res => res.json()).then(json => showResults(json))
}


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}