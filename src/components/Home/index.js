import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'
import './index.css'

import Header from '../Header'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Home = () => {
  const renderAfterRegisterView = (name, topic) => {
    const topicName = topicsList.filter(each => each.id === topic)
    return (
      <div className="welcome-text-container">
        <h1 className="welcome-heading">{`Hello ${name}`}</h1>
        <p className="welcome-description">{`Welcome to ${topicName[0].displayText}`}</p>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
            className="meetup-image"
          />
        </div>
      </div>
    )
  }

  const renderRegisterView = () => (
    <div className="welcome-text-container">
      <h1 className="welcome-heading">Welcome to Meetup</h1>
      <p className="welcome-description">Please register for the topic</p>
      <Link to="/register">
        <button className="register-button" type="submit">
          Register
        </button>
      </Link>

      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
          className="meetup-image"
        />
      </div>
    </div>
  )

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        return (
          <>
            <Header />
            <div className="home-bg-container">
              {isRegistered
                ? renderAfterRegisterView(name, topic)
                : renderRegisterView()}
            </div>
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}
export default Home
