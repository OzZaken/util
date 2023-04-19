export function useAuth() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate authentication
        setTimeout(() => {
            setUser({ name: 'John Doe' })
            setLoading(false)
        }, 2000)
    }, [])

    return { user, loading }
}

// ---------------------------------   Test   ---------------------------------  
function App() {
  const { user, loading } = useAuth()

  if (loading) return <LoadingSpinner />
  
  return (
    <div>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>Please log in to continue.</p>
      )}
      {/* App content goes here */}
    </div>
  )
}