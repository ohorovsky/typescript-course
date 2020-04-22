import React, {useState} from 'react'

export const Input = () => {
    const [name, setName] = useState('')
    // const [name, setName] = useState<string | null>(null)
    return <input value={name} onChange={(e) => setName(e.target.value)} />
}
