import { useState, useEffect } from 'react'
import { useUserStore } from '../contexts/User'

export default () => {
    const { user } = useUserStore()
    const [data, setData] = useState()

    useEffect(() => {
        if (user.logged) fetch('http://localhost:3001/user/', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${user.token}`
            }
        })
        .then(res => res.json())
        .then(data => setData(data))
        .catch(e => console.log('an error has occur:' + e))
    }, [user])
}