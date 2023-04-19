export function useDebouncedState(initialValue, delay) {
  const [state, setState] = useState(initialValue)
  const [debouncedState, setDebouncedState] = useState(initialValue)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedState(state)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [state, delay])

  return [debouncedState, setState]
}