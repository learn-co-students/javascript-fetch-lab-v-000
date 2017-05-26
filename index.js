function getIssues() {
    fetch('https://api.github.com/repos/mikeries/javascript-fetch-lab/issues', {
            method: 'GET',
            headers: {
                Authorization: `token ${getToken()}`
            },
        }).then(res => res.json())
        .then(json => showIssues(json));
}

function showIssues(json) {
    var template = Handlebars.compile(document.getElementById("issues-template").innerHTML);
    var issues = template(json);
    document.getElementById('issues').innerHTML = issues;
}

function createIssue() {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const postData = {
        title: title,
        body: body
    }
    fetch('https://api.github.com/repos/mikeries/javascript-fetch-lab/issues', {
            method: 'post',
            headers: {
                Authorization: `token ${getToken()}`
            },
            body: JSON.stringify(postData)
        }).then(res => res.json())
        .then(json => getIssues(json));
}

function showResults(json) {
    var template = Handlebars.compile(document.getElementById("repo-template").innerHTML);
    var result = template(json);
    document.getElementById('results').innerHTML = result;
}

function forkRepo() {
    const repo = 'learn-co-curriculum/javascript-fetch-lab'
    fetch('https://api.github.com/repos/' + repo + '/forks', {
            method: 'post',
            headers: {
                Authorization: `token ${getToken()}`
            }
        })
        .then(res => res.json())
        .then(json => showResults(json));
}

function getToken() {
    //change to your token to run in browser, but set
    //back to '' before committing so all tests pass
    return ''
        // return 'asdfasdf'
}

const postData = {
    body: 'Great stuff'
};