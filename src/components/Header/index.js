import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <h1 className="heading">Home</h1>
    </Link>
    <Link to="/about">
      <h1 className="heading">About</h1>
    </Link>
  </div>
)

export default Header
