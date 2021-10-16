import { container } from './gradecard.module.css'
import { useSpring, animated } from 'react-spring'
import { useState } from 'react'

const GradeCard = ({ amount = 0, name = ''}) => {

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
    onMouseEnter = {e => set(true)}
    onMouseLeave = {e => set(false)}
    style = {{ scale, margin: margin.to(n => n + 'rem'), opacity, backgroundColor: color}}
    className = {container}>
        <div>
            <h1>{name}</h1>
            <label>{amount} DRACHMES</label>
        </div>
    </animated.div>
}

export default GradeCard