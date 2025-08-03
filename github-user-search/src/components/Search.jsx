import { useState } from 'react'
import { advancedUserSearch, fetchUserData } from '../services/githubService' // <-- include fetchUserData

function Search() {
  const [username, setUsername] = useState('')
  const [location, setLocation] = useState('')
  const [minRepos, setMinRepos] = useState('')
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setUsers([])

    try {
      // Call advanced search first
      const data = await advancedUserSearch(username, location, minRepos)

      // If no results and we only have username, try single user search
      if (data.items.length === 0 && username && !location && !minRepos) {
        const singleUser = await fetchUserData(username)
        setUsers([singleUser])
      } else if (data.items.length === 0) {
        setError('Looks like we cant find the user')
      } else {
        setUsers(data.items)
      }
    } catch (err) {
      setError('Looks like we cant find the user')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="grid gap-4">
        {users.map((user) => (
          <div
            key={user.id || user.login}
            className="flex items-center gap-4 p-3 border rounded shadow"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-bold text-lg">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search
