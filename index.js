const baseApi = 'https://api.github.com/'
const fork = 'rslim87/javascript-fetch-lab'

function Issue(att) {
	this.title = att.title
	this.body = att.body
	this.url = att.url
}

function Repo(att) {
	this.url = att.url
}

Issue.prototype.template = function() {
	const template = `<li>Title: <a href=${this.url}>${this.title}</a> <span> | Body: ${this.body}</span></li>`
	return template
}

Repo.prototype.template = function() {
	const template = `<h3>Forked Successfully!</h3> <a href=${this.url}> ${this.url}</a>`
	return template	
}

function getIssues(data) {
	fetch(`${baseApi}repos/${fork}/issues`).then(resp => {
		resp.json().then( data => {
			for (let i = 0; i < data.length; i++) {
				showIssues(new Issue(data[i])) //[{'title': 'fix this', 'body': 'fix this stuff', 'url': 'some.com'}]
			}
		})
	})
}

function showIssues(json) {
	$('#issue').append(issue)
}

function createIssue() {
	const issueTitle = document.getElementById('title').value
	const issueBody = document.getElementById('body').value

	// fetch('url', {
	// 	method:
	// 	headers: token
 	// 	body:
	// })


	fetch(`${baseApi}repos/${fork}/issues`, {
		method: 'post',
		headers: {
			'Authorization': `token ${getToken()}`
		},
 		body: JSON.stringify({
 			title: issueTitle,
 			body: issueBody
 		})
	}).then(resp => getIssues())

}

function showResults(json) {
	$('#results').append(json.template())
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${baseApi}repos/${repo}/forks`, {
  	method: 'post',
  	headers: {
  		Authorization: `token ${getToken()}`
  	}
  }).then(resp => {
  	let repo = new Repo(resp)
  	showResults(repo)
  })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  //return '6e5601934130e93e5ca0d66d057181fdcfa83747'
  return ''
}
