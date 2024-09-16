import { Component } from "react";
import classes from "./CitiesContainer.module.css"

class CitiesContainer extends Component {
    render() {
        return (
            <div>
                <button className={classes.citiescontainer__button + " " + (this.props.activeValue === 'ottawa' ? classes.active__btn : '')}
                    value="ottawa"
                    onClick={this.props.clicked}>OTTAWA</button>
                <button className={classes.citiescontainer__button + " " + (this.props.activeValue === 'moscow' ? classes.active__btn : '')}
                    value="moscow"
                    onClick={this.props.clicked}>MOSCOW</button>
                <button className={classes.citiescontainer__button + " " + (this.props.activeValue === 'tokyo' ? classes.active__btn : '')}
                    value="tokyo"
                    onClick={this.props.clicked}>TOKYO</button>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default CitiesContainer;