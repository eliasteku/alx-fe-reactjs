import { useState } from 'react'
import { fetchUserData } from '../services/githubService'

function Search() {
  const [username, setUsername] = useState('')         // input state
  const [user, setUser] = useState(null)               // user data
  const [loading, setLoading] = useState(false)        // loading state
  const [error, setError] = useState(null)             // error state

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!username) return

    setLoading(true)
    setError(null)
    setUser(null)

    try {
      const data = await fetchUserData(username)
      setUser(data)
    } catch (err) {
      setError('Looks like we cant find the user')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Search form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering */}
      {loading && <p>Loading...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      {user && (
        <div style={{marginTop: '1rem'}}>
          <img src={user.avatar_url} alt={user.login} width={80} />
          <h3>{user.name || user.login}</h3>
          <a href={user.html_url} target="_blank">View Profile</a>
        </div>
      )}
    </div>
  )
}

export default Search
