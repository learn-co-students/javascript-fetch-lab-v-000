const ROOT_URL = 'https://api.github.com/repos/'
const MY_REPO = "f3mshep/javascript-fetch-lab"

function getIssues() {
  const repo = ROOT_URL + MY_REPO + "/issues"
  const token = getToken()
  fetch(repo, {
    method: 'GET',
    headers: {
      Authorization: `token ${token}`,
    }
  })
    .then((resp) => resp.json()
      .then(function (data) {
        showIssues(data)
      })
    )
}

function showIssues(json) {
  let results = json.map(function (issue) {
    return `<a href="${issue.html_url}">${issue.title}</a>`
  })
  document.getElementById("issues").innerHTML = results.join(' ')
}

function createIssue() {
  const repo = ROOT_URL + MY_REPO + "/issues"
  const token = getToken()
  const postData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  }
  fetch(repo, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`,
    }
  })
    .then((resp) => resp.json())
    .then(function (data) {
      getIssues()
    })

}

function showResults(json) {
  console.log(json)
  document.getElementById("results").innerHTML = `<a href=${json.html_url}>Fork URL</a>`
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  const token = getToken()
  //use fetch to fork it!
  fetch(repo, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then((resp) => resp.json())
    .then(function (data) {
      showResults(data)
    })
}

function getForks() {
  const repo = 'f3mshep/js-ajax-fetch-lab-v-000'
  const token = getToken()
  fetch(ROOT_URL + repo + '/forks', {
    method: 'GET',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res)).then(res => {
    showResults(res)
  })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = ''
  return token
}

