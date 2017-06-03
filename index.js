function getIssues() {
	const repo = 'kelseyhuse30/javascript-fetch-lab'
	fetch(`https://api.github.com/repos/${repo}/issues`, {
		headers: {
    	Authorization: `token ${getToken()}`
  	}
	}).then(res => showIssues(res))
}

function showIssues(json) {
	const src = document.getElementById("issues-template").innerHTML
	const template = Handlebars.compile(src)
	const issuesList = template(json)
	document.getElementById("issues").innerHTML = issuesList;
}

function createIssue() {
	const repo = 'kelseyhuse30/javascript-fetch-lab'
	const issue_title = document.getElementById("title").innerHTML
	const issue_text = document.getElementById("body").innerHTML

	fetch(`https://api.github.com/repos/${repo}/issues`, {
	  method: 'post',
	  body: {
	  	title: issue_title,
	  	body: issue_text
	  },
	  headers: {
	    Authorization: `token ${getToken()}`
	  }
	}).then(res => showResults(res));
}

function showResults(json) {
	console.log(json)
	const src = document.getElementById("repo-template").innerHTML
  const template = Handlebars.compile(src)
  const repoList = template(json)
  document.getElementById("results").innerHTML = repoList;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
	  method: 'post',
	  headers: {
	    Authorization: `token ${getToken()}`
	  }
	}).then(res => showResults(res));
}

function getToken() {
  return ''
}