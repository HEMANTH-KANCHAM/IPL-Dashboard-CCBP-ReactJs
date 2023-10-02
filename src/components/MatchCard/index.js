import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails

  const wonOrLost = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="recent-match-card">
      <div className="recent-match-card-image-container">
        <img
          className="recent-match-card-image"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
      </div>

      <p className="recent-match-card-team">{competingTeam}</p>
      <p className="recent-match-card-result">{result}</p>
      <p className={`recent-match-card-status ${wonOrLost}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
