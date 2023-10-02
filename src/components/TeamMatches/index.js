import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: [],
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const teamData = await response.json()

    const FormattedRecentMatches = teamData.recent_matches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      teamBannerUrl: teamData.team_banner_url,
      recentMatches: FormattedRecentMatches,
      latestMatchDetails: {
        umpires: teamData.latest_match_details.umpires,
        result: teamData.latest_match_details.result,
        manOfTheMatch: teamData.latest_match_details.man_of_the_match,
        id: teamData.latest_match_details.id,
        date: teamData.latest_match_details.date,
        venue: teamData.latest_match_details.venue,
        competingTeam: teamData.latest_match_details.competing_team,
        competingTeamLogo: teamData.latest_match_details.competing_team_logo,
        firstInnings: teamData.latest_match_details.first_innings,
        secondInnings: teamData.latest_match_details.second_innings,
        matchStatus: teamData.latest_match_details.match_status,
      },
      isLoading: false,
    })
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
    </div>
  )

  renderTeamDetails = () => {
    const {teamBannerUrl, latestMatchDetails, recentMatches} = this.state
    return (
      <div className="team-card-content">
        <img className="team-banner" src={teamBannerUrl} alt="team banner" />
        <h1 className="latest-matches-text">Latest Matches</h1>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="recent-match-cards-container">
          {recentMatches.map(each => (
            <MatchCard matchDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  getBgClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    let bgClassName = ''

    switch (id) {
      case 'RCB':
        bgClassName = 'rcb'
        break
      case 'KKR':
        bgClassName = 'kkr'
        break
      case 'KXP':
        bgClassName = 'kxp'
        break
      case 'CSK':
        bgClassName = 'csk'
        break
      case 'RR':
        bgClassName = 'rr'
        break
      case 'MI':
        bgClassName = 'mi'
        break
      case 'SRH':
        bgClassName = 'srh'
        break
      case 'DC':
        bgClassName = 'dc'
        break
      default:
        break
    }

    return bgClassName
  }

  render() {
    const {isLoading} = this.state
    const bgClassName = this.getBgClassName()
    return (
      <div className={`team-card-container ${bgClassName}`}>
        {isLoading ? this.renderLoader() : this.renderTeamDetails()}
      </div>
    )
  }
}

export default TeamMatches
