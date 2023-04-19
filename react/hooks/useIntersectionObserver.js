export function useIntersectionObserver(ref, options) {
    const [isIntersecting, setIsIntersecting] = useState(false)
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      }, options)
  
      if (ref.current) {
        observer.observe(ref.current)
      }
  
      return () => {
        observer.disconnect()
      }
    }, [ref, options])
  
    return isIntersecting
  }