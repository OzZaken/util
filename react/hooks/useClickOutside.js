export function useClickOutside(ref, callback) {
  const handleClick = useCallback(
    event => {
      if (ref.current && !ref.current.contains(event.target)) callback()
    },
    [ref, callback]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [handleClick])
}