function getIssues() {
  fetch(`${'https://api.github.com/'}repos/${`${'emanovic7'}/javascript-fetch-lab`}/issues`).
    then(resp => {
      resp.json().then( data => {
        for (let i = 0; i < data.length; i++){
          displayIssue(new Issue(data[i]));
        }
      } )
    })
}

function showIssues(json) {
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  fetch(`${'https://api.github.com/'}repos/${`${'emanovic7'}/javascript-fetch-lab`}/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

 fetch(`${'https://api.github.com/'}repos/${repo}/forks`, {
   method: 'post',
   headers: {
     'Authorization': `token ${getToken()}`
   }
 }).then(resp => {
   let repo = new Repo(resp);
   showForkedRepo(repo);
 })
}

function getToken() {
  return ''
}
