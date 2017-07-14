
function getIssues() {
    const repo = 'https://api.github.com/repos/umohm1/javascript-fetch-lab/issues'
    fetch(repo, {
        method: 'get',
        headers: { Authorization: `token ${getToken()}` }
    })
    .then(res => showIssues(results))
    }



function showIssues(json) {
    // const repos = JSON.parse(this.responseText)
    // const src = document.getElementById("issues-template").innerHTML
    const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
    // const repoList = template(repos)
    // const repoLists = `<ul>${repos.map(r => '<li><a href="' + r.html_url + '">'  + r.body + r.title + '</li>').join('')}</ul>`
    // document.getElementById("issues").innerHTML = repoList
}

function createIssue() {
    const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
    document.getElementById('issues').innerHTML = template
    const repo = 'https://api.github.com/repos/umohm1/javascript-fetch-lab/issues'
    const postData = {
        title: document.getElementById('title').value,
        body: document.getElementById('body').value
    };
    fetch(repo, {
        method: 'post',
        body: JSON.stringify(postData),
        headers: { Authorization: `token ${getToken()}` }
    })
    .then(res => getIssues())
}


function showResults(json) {
    const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
    document.getElementById('results').innerHTML = template(json)
}

function getToken() {
    return ''
}

function forkRepo() {
    const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
    fetch(repo, {
        method: 'POST',
        headers: {
            Authorization: `token ${getToken}`
        }
    }).then(res => showResults(results));
}
