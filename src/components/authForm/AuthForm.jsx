import { container, sub , input, btn, link } from './authform.module.css'
import { useTransition, animated } from 'react-spring'
import { useState } from 'react'

const AuthForm = ({ login, register }) => {
    const [hasAccount, set] = useState(true)
    const [user, setUser] = useState({ mail: '', pseudo: '', password: ''})
    console.log(user)
    const transitions = useTransition(hasAccount, {
        from: {
            opacity: 0,
            y: 150
        },
        enter: {
            opacity: 1,
            y: 0     
        }
    })

    return transitions((styles, item) => {
    const entry = item ? 'Log In' : 'Register'
    const labels = item ? [{ text: 'Pseudo', type: 'pseudo' }, { text: 'Mot de passe', type: 'password' }] : [{ text: 'E-Mail', type: 'mail' }, { text: 'Pseudo', type: 'pseudo' }, { text: 'Mot de passe', type: 'password' }]
    return <animated.div style = {styles} className = {container}>
        <div className = {sub}>
            <h1>{entry.toUpperCase()}</h1>
            <>
            {
                labels.map(({text, type}) => <div className = {input}>
                    <label>{text}:</label>
                    <input type = {type === 'password' ? 'password' : 'text'} onChange = {e => setUser(prev => {
                        user[type] = e.target.value
                        return { ...prev, ...user }
                    })}/>
                </div>)
            }
            </>
            <button 
            className = {btn}
            onClick = {e => hasAccount ? login(user) : register(user)}>{entry}</button>
        </div>
        <div
        onClick = {e => set(prev => !prev)}
        className = {link}>
            {item ? 'Vous n\'avez pas de ' : 'Vous avez déja un '}<span>compte</span> ?
        </div>
    </animated.div> 
    })
}

export default AuthForm