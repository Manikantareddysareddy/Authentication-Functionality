import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const LogoutButton = props => {
  const removeCookie = () => {
    Cookies.remove('jwt_token')
    const {history} = props

    history.replace('/login')
  }
  return (
    <div className="logout-btn-container">
      <button className="logout-btn" type="button" onClick={removeCookie}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
