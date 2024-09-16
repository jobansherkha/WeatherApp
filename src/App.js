import React, { Component } from "react"
import axios from "axios";
import WeatherCard from "./WeatherCard";
import ForecastContainer from "./ForecastContainer";
import classes from "./App.module.css"
import CitiesContainer from "./CitiesContainer";


class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    loading: false,
    weatherData: [],
    value: "ottawa",
    error: false
  }

  handleClick(e) {
    e.preventDefault()
    this.setState({ value: e.target.value })
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=cb879e95f8b93d64a01725bc798892f4&units=metric`)
      .then(response => this.setState({ weatherData: response.data }))
      .catch(error => this.setState({
        error: true,
        loading: false
      }))
  }

  componentDidMount() {
    this.setState({ loading: true })
    const selectedValue = this.state.value;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${selectedValue}&appid=cb879e95f8b93d64a01725bc798892f4&units=metric`)
      .then(response => this.setState({
        weatherData: response.data,
        loading: false
      }))
      .catch(error => this.setState({
        error: true,
        loading: false
      }))
  }

  render() {
    if (this.state.error) {
      return <h1>Error while Loading the page</h1>
    }
    if (this.state.loading || this.state.weatherData.length === 0) {
      return <h1>Loading...</h1>

    }

    return (
      <CitiesContainer activeValue={this.state.value} clicked={this.handleClick}>
        <div className={classes.app}>
          
          <div className={classes.app__container}>

            <WeatherCard
              data={this.state.weatherData} />

            <ForecastContainer
              key={this.state.value}
              city={this.state.value}
              leftCard={{ borderBottomLeftRadius: "15px" }}
              rightCard={{ borderBottomRightRadius: "15px", borderRight: "4px solid white" }} />

          </div>
        </div>

      </CitiesContainer>
    );
  }
}
export default App;
