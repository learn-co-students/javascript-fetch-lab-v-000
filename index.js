function getIssues() {
    fetch('https://api.github.com/repos/:umohm1')
    .then(res => res.json())
    .then(json => console.log(json));
}


function showIssues(json) {
    const repos = JSON.parse(this.responseText)
    const src = document.getElementById("issues-template").innerHTML
    const template = Handlebars.compile(src)
    const repoList = template(repos)
    const repoLists = `<ul>${repos.map(r => '<li><a href="' + r.html_url + '">'  + r.body + r.title + '</li>').join('')}</ul>`
    document.getElementById("issues").innerHTML = repoList
}

function createIssue() {
}

function showResults(json) {
    const repos = JSON.parse(this.responseText)
    const src = document.getElementById("repo-template").innerHTML
    const template = Handlebars.compile(src)
    const repoList = template(repos)
    const repoLists = `<ul>${repos.map(r => '<li><a href="' + r.html_url + '">'  + r.full_name + '</li>').join('')}</ul>`
    document.getElementById("issues").innerHTML = repoList
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('https://github.com/learn-co-curriculum/javascript-fetch-lab'), {

  }
}

function showForkedRepo() {

}

function getToken() {
  // change to your token to run in browser, but set
  // back to '' before committing so all tests pass
  const token = '02c259e66acbfbc709c469ed5800ae0e81992b37';
  fetch('https://api.github.com/repos/:umohm1', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
  // return ''
}
