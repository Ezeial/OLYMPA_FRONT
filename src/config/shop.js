import money1 from '../assets/money1.png'
import money2 from '../assets/money2.png'
import money3 from '../assets/money3.png'
import money4 from '../assets/money4.png'
import money5 from '../assets/money5.png'
import money6 from '../assets/money6.png'

export const drachmes = Object.freeze([
    {
        id: 1,
        price: 0.99,
        amount: 100,
        discount: 0,
        src: money1
    },
    {
        id: 2,
        price: 4.99,
        amount: 500,
        discount: 25,
        src: money2
    },
    {
        id: 3,
        price: 9.99,
        amount: 1100,
        discount: 100,
        src: money3
    },
    {
        id: 4,
        price: 19.99,
        amount: 2300,
        discount: 300,
        src: money4
    },
    {
        id: 5,
        price: 49.99,
        amount: 6000,
        discount: 1000,
        src: money5
    },
    {
        id: 6,
        price: 99.99,
        amount: 12500,
        discount: 2500,
        src: money6
    },
])

export const creatif = Object.freeze([
    {
        amount:"500",
        name:"Apprenti",
        description: ""
    },
    {
        amount:"1000",
        name:"Architecte",
        description: ""
    }
])

export const zta = Object.freeze([
    {
        amount:"200",
        name:"Nom 1",
        description: ""
    },
    {
        amount:"500",
        name:"Nom 2",
        description: ""
    },
    {
        amount:"1000",
        name:"Nom 3",
        description: ""
    },
    {
        amount:"1200",
        name:"Nom 4",
        description: ""
    },
    {
        amount:"1500",
        name:"Nom 5",
        description: ""
    },
    {
        amount:"2000",
        name:"Nom 6",
        description: ""
    }
])

export const pvpfac = Object.freeze([
    {
        amount:"200",
        name:"Hilote",
        description: ""
    },
    {
        amount:"500",
        name:"Périèque",
        description: ""
    },
    {
        amount:"1000",
        name:"Spartiate",
        description: ""
    },
    {
        amount:"1200",
        name:"Hoplite",
        description: ""
    },
    {
        amount:"1500",
        name:"Capitaine",
        description: ""
    },
    {
        amount:"2000",
        name:"Roi",
        description: ""
    },
    {
        amount:"100",
        name:"Kit \"Enchant\"",
        description: "(1) Table d'enchantement, (32) Lapis-Lazuli, (5) Bibliothèques Placez ces objets dans votre territoire et vous pourrez enchanter sans aucun problème !"
    },
    {
        amount:"50",
        name:"Kit \"Colon\"",
        description: " (1) Set d'armure en cuir \"Colon\", (1) Set d'outils en fer, (1) Epée en fer, (16) Steaks de vache, (1) Canne à pêche Débutez votre journée dans notre serveur Faction avec ce kit vous permettant de miner efficacement !"
    }
])
export default {}