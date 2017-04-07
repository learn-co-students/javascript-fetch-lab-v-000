function getIssues(res) {
	const repo = 'nothingisfunny/javascript-fetch-lab';
	fetch('https://api.github.com/repos/' + repo + '/issues',{
		method: 'get'
	}).then(res => { 
		return res.json()
	}).then(json => {
		return showIssues(json)
	})
}

function showIssues(json) {
	const src = document.getElementById('issues-template').innerHTML;
	const template = Handlebars.compile(src);
	const result = template(json);
	document.getElementById("issues").innerHTML = result;
}

function createIssue() {
	const repo = 'nothingisfunny/javascript-fetch-lab'
	const params = {body: document.getElementById('body').value, title: document.getElementById('title').value}
	fetch('https://api.github.com/repos/' + repo + '/issues', {
		method: 'post',
		headers: {
			Authorization: `token ${getToken()}`,
			'content-type': 'application/json',
			'accept': 'application/json'
		},
		body: JSON.stringify(params)
	}).then((res) => {
		return getIssues(res)
	})
}

function showResults(json) {
	const src = document.getElementById("repo-template").innerHTML;
	const template = Handlebars.compile(src);
	const result = template(json);
	document.getElementById("results").innerHTML = result;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('https://api.github.com/repos/' + repo + '/forks', {
  	method: 'post',
  	headers: {
  		Authorization: `token ${getToken()}`
  	}
  }).then(res => res.json())
  	.then(json =>showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
