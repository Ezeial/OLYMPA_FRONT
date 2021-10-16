import React, { useContext, useState } from 'react'

const UserContext = React.createContext({})

const useUserStore = () => useContext(UserContext)

const Provider = ({ children }) => {
    const [user, setUser] = useState({ logged: true, pseudo: 'KataStroF_', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwc2V1ZG8iOiJLYXRhU3Ryb0ZfIiwiaWF0IjoxNjI5MjE1MjcyfQ.bU8pMw4awngIBXxs5xsPnhybj8AAnJlEyKhrQiYYDG0', uuid: '02536a7567e044b68f38220dd08a372b'})
    // const [user, setUser] = useState({ pseudo: '', token: '', uuid: '', logged: false })
    return <UserContext.Provider value = { { user, setUser } }>
        { children }
    </UserContext.Provider>
}

export default Provider

export { useUserStore }