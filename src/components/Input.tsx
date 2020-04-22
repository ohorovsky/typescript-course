import React, {useState, useRef} from 'react'

export const Input = () => {
    const [name, setName] = useState('')
    // const [name, setName] = useState<string | null>(null)
    // !null Read Only
    const ref = useRef<HTMLInputElement | null>(null!);
    if(ref && ref.current){
        console.log('ref', ref.current.value)
    }
    return <input ref={ref} value={name} onChange={(e) => setName(e.target.value)} />
}
