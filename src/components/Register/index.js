import RegisterContext from '../../context/RegisterContext'
import Header from '../Header'

import './index.css'

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

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        updateName,
        updateTopic,
        changeRegistrationStatus,
        updateError,
        registerError,
      } = value

      const onChangeTopic = event => {
        updateTopic(event.target.value)
      }

      const onChangeUserName = event => {
        updateName(event.target.value)
      }

      const onClickRegister = event => {
        event.preventDefault()
        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          changeRegistrationStatus()
        } else {
          updateError(true)
        }
      }
      return (
        <>
          <Header />
          <div className="register-bg-container">
            <div className="register-container">
              <div className="image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png "
                  alt="website register"
                  className="register-image"
                />
              </div>
              <form className="lets-join-container" onSubmit={onClickRegister}>
                <h1 className="let-us-join-heading">Let us join</h1>
                <label htmlFor="name" className="label-text">
                  NAME
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="name-input-field"
                  onChange={onChangeUserName}
                />
                <label htmlFor="topics" className="label-text">
                  TOPICS
                </label>
                <select
                  id="topics"
                  className="topics-dropdown"
                  onChange={onChangeTopic}
                  value={topic}
                >
                  {topicsList.map(each => (
                    <option key={each.id} value={each.id}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
                <button type="submit" className="register-button">
                  Register Now
                </button>
                {registerError && (
                  <p className="error-msg">Please enter your name</p>
                )}
              </form>
            </div>
          </div>
        </>
      )
    }}
  </RegisterContext.Consumer>
)
export default Register
