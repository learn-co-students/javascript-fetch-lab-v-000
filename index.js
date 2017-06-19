const owner = 'mdo5004'
const repo = 'javascript-fetch-lab'
function getIssues() {
    //GET /repos/:owner/:repo/issues
fetch(`https://api.github.com/repos/${owner}/${repo}/issues`).then(res => res.json()).then(function(json) {
        console.log(json)
        showIssues(json)
    })
}

function showIssues(json) {
    const source = document.getElementById('issues-template').innerHTML
    const template = Handlebars.compile(source);

    document.getElementById("issues").innerHTML = template(json)
}

function createIssue() {
    const title = document.getElementById('title').value
    const body = document.getElementById('body').value
    const token = getToken();

    //    POST /repos/:owner/:repo/issues
    fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
        headers: {
            Authorization: `token ${token}`
        },
        method: "post",
        body: JSON.stringify({title: title, body: body})
    }).then(res => res.json()).then(function(json) {
        console.log(json)
        getIssues()
    })
}

function showResults(json) {
    const template = document.getElementById("repo-template").innerHTML;
    const templateFn = Handlebars.compile(template);
    document.getElementById('results').innerHTML += templateFn(json);
}

function forkRepo() {
    const repo_to_fork = 'learn-co-curriculum/javascript-fetch-lab'
    const token = getToken();
    //    POST /repos/:owner/:repo/forks

    fetch(`https://api.github.com/repos/${repo_to_fork}/forks`, {
        headers: {
            Authorization: `token ${token}`
        },
        method: "post"
    }).then(res => res.json()).then(json => showResults(json))

}

function getToken() {
    //change to your token to run in browser, but set
    //back to '' before committing so all tests pass
    return ''
}
