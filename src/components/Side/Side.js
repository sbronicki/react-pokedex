import classes from './Side.module.css'

const Side = (props) => {
    return (
        <div className={classes.Side}>
            {props.Left ? 
                <div className={classes.Left}>
                    left
                </div> : 
                <div className={classes.Right}>
                    right
                </div>
            }
        </div>

    )
}

export default Side