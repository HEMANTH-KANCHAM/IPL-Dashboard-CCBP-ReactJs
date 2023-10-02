import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {id, name, teamImageUrl} = team

  return (
    <li className="team-card">
      <Link to={`/team-matches/${id}`} className="team-link">
        <img className="team-image" src={teamImageUrl} alt={name} />
        <div className="team-name-container">
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
