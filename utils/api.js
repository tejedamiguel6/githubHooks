const id = 'YOUR_CLIENT_ID'
const sec = 'YOUR_SECRET_ID'
const params = `?client_id${id}&client_secret=${sec}`

export async function fetchPopularRepos(language) {
  const endpoint = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  )

  const gitHubData = await fetch(endpoint)

  const response = await gitHubData.json()
  if (!response.items) {
    throw new Error(data.message)
  }
  const data = await response.items
  return data
}
