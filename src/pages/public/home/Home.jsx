import { container } from './home.module.css'

import Topbar from '../../../components/topbar/Topbar'
import HomeBtn from '../../../components/homeBtn/HomeBtn'

const Home = () => {
    return <div className = {container}>
        <Topbar fixed/>
        <HomeBtn/>
    </div>
}

export default Home