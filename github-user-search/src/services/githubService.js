import axios from 'axios'

// Existing single-user fetch (keep for reference)
export async function fetchUserData(username) {
  const url = `https://api.github.com/users/${username}`
  const response = await axios.get(url)
  return response.data
}

// New advanced search function
export async function advancedUserSearch(username, location, minRepos) {
  let query = ''

  if (username) query += `${username} `
  if (location) query += `location:${location} `
  if (minRepos) query += `repos:>=${minRepos} `

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`
  const response = await axios.get(url)
  return response.data
}
