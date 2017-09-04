// //the token to use  70510ae4478d63c234bb777aa59304fb9005e1a7
//
// // const token = '70510ae4478d63c234bb777aa59304fb9005e1a7';
//
// //GET EXAMPLE
// // fetch('https://api.github.com/user/repos', {
// //   headers: {
// //     Authorization: `token ${token}`
// //   }
// // }).then(res => res.json()).then(json => console.log(json));
//
//
// // const token = '70510ae4478d63c234bb777aa59304fb9005e1a7';
// // const postData = {
// //   body: 'Great stuff'
// // };
// //
// // // POST example with fetch()
// // fetch('https://api.github.com/repos/bmolina-nyc/javascript-git-hub-api-with-xhr-lab-v-000/commits/80fc02318a800ef28f96f2d69c4e7f7d787d6b5e/comments', {
// //   method: 'POST',
// //   body: JSON.stringify(postData),
// //   headers: {
// //     Authorization: `token ${token}`
// //   }
// // }).then(res => console.log(res));
// //
// //
//
function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

// API call to GET the elements
function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).
  then(res => res.json()).
  then(json => showResults(json));
}


// break down the items into single elements
function showResults(json) {
  let result = json.map( el => showResult(el) ).join('')
  return `<ul> ${result} </ul>`
}

// render the single elements to the map
function showResult(el){
    `
      ${$('#results').append(`
        <li>
          ${el.owner.login}  - Open Issues: ${el.open_issues_count}

        </li>
        <br>
      `)}
    `
    console.log(el)
}

// github authorization
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // // return ''
  // return '70510ae4478d63c234bb777aa59304fb9005e1a7'
}
