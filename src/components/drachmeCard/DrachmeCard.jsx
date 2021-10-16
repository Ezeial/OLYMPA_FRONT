import { containo } from './drachmecard.module.css'
import euro from '../../assets/euro.svg'
import { useState } from 'react'
import { animated, useSpring } from 'react-spring'

const DrachmeCard = ({ onClick, src = '', amount = 0, price = 0, discount = 0 }) => {
    const [hover, set] = useState(false)
    
    const { scale, margin, opacity, color } = useSpring({
        scale: hover ? 1.1 : 1, 
        margin: hover ? 2: 1,
        color: hover ? 'rgba(0, 0, 0, 0.7)' : 'rgba(30, 30, 30, 0.9)',
        opacity: 1,
        from: {
            opacity: 0,
            color: 'rgba(30, 30, 30, 0.9)'
        }
    })

    return <animated.div
    onClick = {onClick}
    onMouseEnter = {e => set(true)}
    onMouseLeave = {e => set(false)}
    style = {{ scale, margin: margin.to(n => n + 'rem'), opacity, backgroundColor: color}} 
    className = {containo}>
    <div>
        <img src = {src}/>
        <h1> {amount} drachmes.</h1>
        <small>+{discount}</small>
    </div>
    <label>
        <h2>{price}</h2><img src = {euro}/>
    </label>   
</animated.div>
}

export default DrachmeCard