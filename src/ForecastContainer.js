import axios from 'axios'
import React, { Component } from 'react'
import ForecastCard from './ForecastCard'
import classes from "./ForecastContainer.module.css"

export class ForecastContainer extends Component {

    state = {
        loading: false,
        forecastData: [],
        error: false
    }

    componentDidMount() {
        this.setState({ loading: true })

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&appid=cb879e95f8b93d64a01725bc798892f4&units=metric`)
            .then(response => this.setState({
                forecastData: response.data,
                loading: false
            }))
            .catch(error => this.setState({
                error: true,
                loading: false
            }))
    }

    render() {

        if (this.state.error) {
            return <h1>Error Loading the page</h1>
        }

        if (this.state.loading || this.state.forecastData.length === 0) {
            return <div>Loading...</div>
        }
        return (
            <div className={classes.forecastcontainer}>
                <ForecastCard
                    data={this.state.forecastData.list[8]}
                    cornerCard={this.props.leftCard} />
                <ForecastCard
                    data={this.state.forecastData.list[16]}
                />
                <ForecastCard
                    data={this.state.forecastData.list[24]}
                />
                <ForecastCard
                    data={this.state.forecastData.list[32]}
                    cornerCard={this.props.rightCard}
                />

            </div>
        )
    }
}

export default ForecastContainer
