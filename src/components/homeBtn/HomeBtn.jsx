import { button } from './homeBtn.module.css'
import handSvg from '../../assets/whitehand.svg'
import { useSpring, animated } from 'react-spring'
import { useEffect, useState, useRef } from 'react'

const HomeBtn = () => {
    const btnRef = useRef(null)
    const [clicked, setClicked] = useState(false)
    const [hand, handApi] = useSpring(() => ({ top: 0, left: 0 }))
    const btn = useSpring({ scale: clicked ? 1 : 0 })
    
    const resetHand = () => handApi({ top: btnRef.current.clientHeight - 60, left: btnRef.current.clientWidth - 150})
    const calc = (x, y) => ({
        left: x - btnRef.current.offsetLeft,
        top: y - btnRef.current.offsetTop
    })

    useEffect(() => {
        resetHand()
    }, [])

    return <animated.button
    style = {{ scale: btn.scale.to({ range: [0, 0.5, 1], output: [1, 0.9, 1]}) }}
    ref = {btnRef}
    className = {button}
    onMouseMove = { e => {
        handApi(calc(e.clientX, e.clientY))
    }}
    onMouseLeave = { e => {
        resetHand()
    }}
    onClick = { e => {
        setClicked(prev => !prev)
    }}
    >
        <p>   
            play.olympa.fr
        </p>
        <animated.img style = {hand} src = {handSvg}/>
    </animated.button>
}

export default HomeBtn