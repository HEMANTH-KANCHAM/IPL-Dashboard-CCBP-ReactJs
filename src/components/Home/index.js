import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teamsList: formattedData, isLoading: false})
  }

  renderTeams = () => {
    const {teamsList} = this.state
    return (
      <ul className="teams-list-container">
        {teamsList.map(eachTeam => (
          <TeamCard team={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        <div className="home-heading">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? this.renderLoader() : this.renderTeams()}
      </div>
    )
  }
}

export default Home
