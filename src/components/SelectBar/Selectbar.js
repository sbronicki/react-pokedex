import classes from './Selectbar.module.css'

const titleCase = (str) => {
    return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

const Selectbar = (props) => {
    const names = props.data.map((pokemon) => (pokemon.name))

    const options = names.map((name) => (
        <option key={name}>{names.indexOf(name) + 1}. {titleCase(name)}</option>
    ))

    return(
        <select className={classes.Selectbar} onChange={props.onChangeHandler}>
           {options}
        </select>
    )
}

export default Selectbar