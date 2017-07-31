function getIssues() {
	const getIssue = 'https://api.github.com/repos/apalski/javascript-fetch-lab/issues';
	fetch(getIssue, {
		headers: {
  			Authorization: `token ${getToken()}`
  		}
	}).then(res => showIssues(results))
}

function showIssues(json) {
	var template = Handlebars.compile(document.getElementById("issues-template").innerHTML);
	document.getElementById("issues").innerHTML = template(json);
}

function createIssue() {
	var title = document.getElementById("title").value;
	var text = document.getElementById("body").value;
	const issue = 'https://api.github.com/repos/@apalski/javascript-fetch-lab/issues';
	fetch(issue, {
		method: 'POST',
		title: title,
		body: text,
		headers: {
  			Authorization: `token ${getToken()}`
  		}
	}).then(getIssues())
}

function showResults(json) {
	var template = Handlebars.compile(document.getElementById("repo-template").innerHTML);
	document.getElementById("results").innerHTML = template(json);
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  //use fetch to fork it!
  fetch(repo, {
  	method: 'POST',
  	headers: {
  		Authorization: `token ${getToken()}`
  	}
  }).then(res => showResults(results))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
