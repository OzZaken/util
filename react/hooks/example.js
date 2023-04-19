import { useLocalStorage, useDebouncedState, useClickOutside, useIntersectionObserver } from './'

function MyComponent() {
    const [count, setCount] = useLocalStorage('count', 0)
    const [debouncedValue, setDebouncedValue] = useDebouncedState('initial value', 1000)

    const handleClickOutside = () => {
        console.log('Clicked outside!')
    }

    const ref = useRef()
    useClickOutside(ref, handleClickOutside)

    const isIntersecting = useIntersectionObserver(ref, {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
    })

    return (
        <div ref={ref}>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Debounced value: {debouncedValue}</p>
            <input onChange={(event) => setDebouncedValue(event.target.value)} />
            <p>Is intersecting: <pre>{JSON.stringify(isIntersecting, null, 2)}</pre></p>
        </div>
    );
}
