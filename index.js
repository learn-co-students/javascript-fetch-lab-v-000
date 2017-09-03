function getIssues() {
  const repo = 'https:/api.github.com/repos/rmullig2/javascript-fetch-lab/issues'
  //const repo = 'https:/api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/issues'
  const token = getToken()
    json = fetch(repo,{
    method: 'GET',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(function(response) {
    return response.json()
  }).then(json => showIssues(json))

}

function showIssues(json) {
  const src = document.getElementById('issues-template').innerHTML
  const template = Handlebars.compile(src)
  const results = template(json)
  //debugger
  document.getElementById('issues').innerHTML = results
}

function createIssue() {
  const issue_title = title.value
  const issue_body = body.value
  const repo = 'https:/api.github.com/repos/rmullig2/javascript-fetch-lab/issues'
  //const repo = 'https:/api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  const token = getToken()
  json = fetch(repo,{
    method: 'post',
    title: issue_title,
    body: issue_body,
    headers: {
      Authorization: `token ${token}`
    }
  })
}

function showResults(json) {
//  const full_name = json.full_name
//  const html_url = json.html_url
  const src = document.getElementById('repo-template').innerHTML
  const template = Handlebars.compile(src)
  const results = template(json)
  //debugger
  document.getElementById('results').innerHTML = results
}

function forkRepo() {
  //const repo = 'https:/github.com/learn-co-curriculum/javascript-fetch-lab'
  const repo = 'https:/api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  const token = getToken()
  //const repo = 'https:/api.github.com/repos/rmullig2/javascript-fetch-lab/forks'
    //use fetch to fork it!
  //fetch(repo).then(resp => resp.json()).then(showResults(resp))
  json = fetch(repo,{
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(function(response) {
    return response.json()
  }).then(json => showResults(json))
  //debugger
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
