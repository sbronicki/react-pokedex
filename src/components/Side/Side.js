import classes from './Side.module.css'
import Bill from '../../img/bill-poke-genius.png'
import Red from '../../img/red-from-pallet.png'

const Side = (props) => {
    return (
        <div className={classes.Side}>
            {props.Left ? 
                <div className={classes.Left}>
                    <img src={Bill} alt="Bill the Pokémon genius!" />
                    <h2>Masaki Sonezaki (Bill)</h2>
                    <p>Bill is an inventer and all around Pokémon genius, just like you!</p>
                </div> : 
                <div className={classes.Right}>
                    <img src={Red} alt="Red from Pallet Town" />
                    <h2>Red from Pallet Town</h2>
                    <p>Red from Pallet Town is the legendary, strongest trainer ever! Seen here using the Pokémon Storage System, one of Bill's many inventions!</p>
                </div>
            }
        </div>

    )
}

export default Side