const token = getToken();
let myRepo = 'bhabig/javascript-fetch-lab';

function getIssues() {
  fetch(`https://api.github.com/repos/${myRepo}/issues`)
    .then(res => res.json())
    .then(json => {
      showIssues(json)
    });
}

function showIssues(json) {
  let issueDiv = document.querySelector('#issues-template').innerHTML;
  let template = Handlebars.compile(issueDiv);
  // let issuesInfo = json.map(i => {
  //   return {
  //     url: i.url, title: i.title, body: i.body
  //   }
  // });
  // let issues = { issues: issuesInfo }
  //pass issues into template to work in browser
  document.querySelector('#issues').innerHTML = template(json);
}

function createIssue() {
  let issueTitle = document.querySelector('#title').value;
  let issueBody = document.querySelector('#body').value;
  let issue = { title: issueTitle, body: issueBody };
  fetch(`https://api.github.com/repos/${myRepo}/issues`, {
    method: 'post',
    body: JSON.stringify(issue),
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => {
      getIssues()
    })
}

function showResults(json) {
  let repoTemplate = document.getElementById('repo-template').innerHTML;
  let template = Handlebars.compile(repoTemplate)
  // let data = { full_name:  json.full_name, html_url: json.html_url}
  // myRepo = json.full_name;
  //pass data into template to work in browser
  document.getElementById('results').innerHTML = template(json);
}


function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
      method: 'post',
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then(res => res.json())
    .then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
