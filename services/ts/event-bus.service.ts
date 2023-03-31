// Defines a type alias Listener for a function that takes a single argument detail of any type and returns void.
type Listener = (detail: any) => void

export const eventBusService = { on, emit }

// on:  takes two arguments: eventName of type string and listener of type (data: T) => void.
function on<T>(eventName: string, listener: (data: T) => void): () => void {
  
    const callListener = (event: CustomEvent<T>): void => {
     
        listener(event.detail)
    }

    window.addEventListener(eventName, callListener as EventListener)

    return (): void => {
       
        window.removeEventListener(eventName, callListener as EventListener)
    }
}

function emit(eventName: string, data?: any): void {
    
    window.dispatchEvent(new CustomEvent(eventName, { detail: data }))
}

type MsgType = 'info' | 'success' | 'danger' | 'warn'

export function showUserMsg(txt: string, type: MsgType = 'info'): void {
    eventBusService.emit('show-user-msg', { txt, type })
}

export function showSuccessMsg(txt: string): void {
    showUserMsg(txt, 'success')
}

export function showErrorMsg(txt: string): void {
    showUserMsg(txt, 'danger')
}

export function showWarnMsg(txt: string): void {
    showUserMsg(txt, 'warn')
}