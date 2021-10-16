import { sect, container, sidebar, content, topbar, items, payment } from './shop.module.css'

import { Switch, Route, useRouteMatch, Redirect, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useUserStore } from '../../../contexts/User'

import { drachmes, zta, pvpfac, creatif } from '../../../config/shop'
import Omega from '../../../assets/omega.svg'

import Topbar from '../../../components/topbar/Topbar'
import DrachmeCard from '../../../components/drachmeCard/DrachmeCard'
import GradeCard from '../../../components/gradeCard/GradeCard'

const Shop = () => {
    const { path } = useRouteMatch()
    const [money, setMoney] = useState()
    const [paymentWindow, setPaymentWindow] = useState()
    const { user } = useUserStore()

    return <section className = {sect}>
    <Topbar darked/>
    <div className = {container}>
        <div className={sidebar}>
            <h1>BOUTIQUE</h1>
            <p>Bienvenue sur la boutique !</p>
            <img src = {Omega}/>
            {
                user.logged ?
                <div>
                <p>Vos drachmes:</p>
                <h2>{money}</h2>
                <Link to = {`${path}/drachmes`}><button>J'EN VEUX PLUS</button></Link>
                </div> : 
                <div>
                    <p>
                        vous n'etes pas connecté
                    </p>
                </div>
            }
            <small>E.U.L.A</small>
            <small>CGV</small>
            <small>CGU</small>
        </div>
        <div className={content}>
            <div className={topbar}>
                <Link to = {`${path}/zta`}><p>Zta</p></Link>
                <Link to = {`${path}/pvpfac`}><p>PvP Fac</p></Link>
                <Link to = {`${path}/creatif`}><p>Créatif</p></Link>
            </div>
            <div className={items}>
                <Switch>
                    <Route path = {`${path}/drachmes`}>
                        {drachmes.map(({ id, price, amount, discount, src }) => <DrachmeCard onClick = {e => setPaymentWindow(id)} {...{price, amount, discount, src}}/>)}
                    </Route>
                    <Route path = {`${path}/zta`}>
                        {zta.map(({amount, name}) => <GradeCard {...{amount, name}}/>)}
                    </Route>
                    <Route path = {`${path}/pvpfac`}>
                        {pvpfac.map(({amount, name}) => <GradeCard {...{amount, name}}/>)}
                    </Route>
                    <Route path = {`${path}/creatif`}>
                        {creatif.map(({amount, name}) => <GradeCard {...{amount, name}}/>)}
                    </Route>
                    <Route path = {`${path}`}>
                        <Redirect to = {`${path}/drachmes`}/>
                    </Route>
                </Switch>
            </div>
        </div>
    </div>
    {paymentWindow && <div className = {payment}>
        {
            user.logged ?
            <>
                <div>Stripe</div>
                <div>PayPal</div>
            </> : <>not logged in</>
        }

    </div>}
    </section>
}

export default Shop