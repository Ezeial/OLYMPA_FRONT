import { container, bordered, fix, dark, invis, avatar, logo } from './topbar.module.css'
import cloud from '../../assets/cloud.png'
import { Link } from 'react-router-dom'
import { useUserStore } from '../../contexts/User'

const Topbar = ({ fixed = false, darked = false, invisible = false }) => {
    const { user } = useUserStore()

    return <div className = {`${container} ${fixed && fix} ${darked && dark} ${invisible && invis}`}>
        <Link><p>Voter</p></Link>                                                                        
        <Link><p>Statistiques</p></Link>                                                                       
        <Link><p>Forum</p></Link>
        <Link to = '/'><img className = {logo} src = {cloud}/></Link>                                                                      
        <Link to = '/shop'><p>Boutique</p></Link>                                                                     
        <Link><p>Wiki</p> </Link>
        {
            user.logged ? 
            <Link to = '/profile'>  
                <p className = {bordered}>{user.pseudo}</p>
                <img className = {avatar} src = {`https://crafatar.com/avatars/${user.uuid}`}/>
            </Link>:
            <Link to = '/auth'>
            <p className = {bordered}>Connection</p>
            </Link>
        }                                                                                                                                 
    </div>
}

export default Topbar