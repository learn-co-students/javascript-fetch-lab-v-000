const gitHub = `api.github.com`

function getIssues() { 
    fetch(`/javascript-fetch-lab/issues/`).
        then(resp => resp.json()).
        then(json => showIssues(json))
}

function showIssues(json) {
    var template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
    document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
    const issueTitle = document.getElementById('title').value
    const issueBody = document.getElementById('body').value
    const postData = { title: issueTitle, body: issueBody }

    fetch(`/javascript-fetch-lab/issues/`, {
        method: 'post',
        headers: {
            Authorization: `token ${getToken()}`
        },
        body: JSON.stringify(postData)
    }).then(resp => getIssues())
}

function showResults(json) {
    var template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
    document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
    const repo = 'learn-co-curriculum/javascript-fetch-lab' //sets constant

    fetch(`/${gitHub}/repos/${repo}`, { //fetch API - see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
        method: 'post', 
        headers: {
            Authorization: `token ${getToken()}`
        }
    }).then(resp => resp.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}