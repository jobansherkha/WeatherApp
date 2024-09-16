import React, { Component } from 'react'
import classes from "./WeatherCard.module.css"

class WeatherCard extends Component {
    render() {
        const url = `http://openweathermap.org/img/wn/${this.props.data.weather[0].icon}@2x.png`

 {/* Api had the icons for the weather conditions which are used in the application instead of fontawesome 
  icons which were optional . It also had wide range of icons for weather conditions which adds more to the application
  in terms of functionality. Downside for these icons is that the border is not darkened for the icon. */}
        return (
            <div className={classes.weathercard__container}>

                <div className={classes.weathercard__day}>Today</div>

                <div className={classes.weathercard__content}>

                    <div ><img src={url} alt="weather_icon" style={{ width: "150px", height: "150px" }} /></div>

                    <div className={classes.weathercard__info}>
                        <div className={classes.weathercard__temp}><strong>{this.props.data.main.temp.toFixed(0)} &deg;</strong></div>
                        <div>{this.props.data.weather[0].description}</div>
                    </div>

                </div>

            </div>
        )
    }
}


export default WeatherCard;