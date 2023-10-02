import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="latest-match-info-container">
        <div className="latest-match-info">
          <p className="latest-competing-team">{competingTeam}</p>
          <p className="latest-match-date">{date}</p>
          <p className="latest-match-venue">{venue}</p>
          <p className="latest-match-result">{result}</p>
        </div>
        <img
          className="latest-match-team-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="latest-match-details">
        <p className="latest-match-text">First Innings</p>
        <p className="latest-match-team-result">{firstInnings}</p>
        <p className="latest-match-text">Second Innings</p>
        <p className="latest-match-team-result">{secondInnings}</p>
        <p className="latest-match-text">Man Of The Match</p>
        <p className="latest-match-team-result">{manOfTheMatch}</p>
        <p className="latest-match-text">Umpires</p>
        <p className="latest-match-team-result">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
