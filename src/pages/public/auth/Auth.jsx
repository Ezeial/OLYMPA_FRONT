import Topbar from '../../../components/topbar/Topbar'
import { container } from './auth.module.css'
import AuthForm from '../../../components/authForm/AuthForm'
import { useUserStore } from '../../../contexts/User'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

const fetchUser = async ({ pseudo, password, email = ''}, endpoint) => {
    const res = await fetch(`http://localhost:3001/user/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pseudo, password, email })
    })
    return res.json()
}

const handleError = (error) => {
    toast(error, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        type: 'error'
    })
}

const Auth = () => {
    const { setUser } = useUserStore()
    const history = useHistory()

    const login = async ({ pseudo, password }) => {
        try {
            const { error, token, uuid } = await fetchUser({ pseudo, password }, 'login')
            if (error) return handleError(error)
            setUser({ pseudo, token, uuid, logged: true })
            history.replace('/')
            toast('Vous etes connecté', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                type: 'success'
            })
        } catch (err) { console.log(err) }
    }
    
    const register = async ({ pseudo, password, mail }) => {
        try {
            const { error } = await fetchUser({ pseudo, password, mail }, 'register')
            if (error) return handleError(error)
        } catch (err) { console.log(err) }
    }

    return <div className = {container}>
        <Topbar invisible/>
        <AuthForm {...{ login, register }}/>
    </div>
}

export default Auth