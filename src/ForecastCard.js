import React, { Component } from 'react'
import classes from "./ForecastCard.module.css"


class ForecastCard extends Component {
    render() {
        const dayData = this.props.data.dt_txt;
        const newDayData = dayData.split(" ")
        const date = new Date(newDayData[0])
        const day = date.getDay()
        const days = { 0: "Mon", 1: "Tue", 2: "Wed", 3: "Thu", 4: "Fri", 5: "Sat", 6: "Sun" }


        const url = `http://openweathermap.org/img/wn/${this.props.data.weather[0].icon}@2x.png`

        return (
            <div className={classes.forecastcard__container} style={this.props.cornerCard}>
                <div className={classes.forecastcard__day}>{days[day]}</div>
                <div className={classes.forecastcard__icon} style={{ width: "170px", height: "100px" }}><img src={url} alt="weather icon" /></div>
                <div className={classes.forecastcard__temp}>{this.props.data.main.temp.toFixed(0)}&deg;</div>
            </div>
        )
    }
}

export default ForecastCard
