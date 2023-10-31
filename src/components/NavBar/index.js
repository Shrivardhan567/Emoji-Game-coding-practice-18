// Write your code here.
const NavBar = props => {
  const {listDetails, maxLength} = props
  return (
    <nav>
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="logo"
      />
      <p>Emoji Game</p>
      <div>
        <p>score :{listDetails.length}</p>
        <p>Top Score :{maxLength}</p>
      </div>
    </nav>
  )
}

export default NavBar
