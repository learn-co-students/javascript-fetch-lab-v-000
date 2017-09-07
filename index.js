function getIssues() {
  const token = '6249674497907b134888356dfa7e4f9b4ae092a0'
  const repo = 'jsumanth5526/javascript-fetch-lab'
  fetch('https://api.github.com/repos/'+repo+'/issues', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}



function showIssues(json) {
    document.getElementById('issues').innerHTML=json;
}




function createIssue() {
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  const token = '6249674497907b134888356dfa7e4f9b4ae092a0'
  const repo = 'jsumanth5526/javascript-fetch-lab'
  fetch('https://api.github.com/repos/'+repo+'/issues', {
     method: 'post',
     body:JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));

}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab/forks'
  //use fetch to fork it!
  const token = '6249674497907b134888356dfa7e4f9b4ae092a0'
  fetch('https://api.github.com/repos/'+repo, {
     method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showForkedRepo(json));
}

function showForkedRepo(rjson)
{
  var hurl=rjson.html_url;
  var a=`<ul><li><a href="${hurl}">${hurl}</a></li></ul>`
  document.getElementById('results').innerHTML=a;

}
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
