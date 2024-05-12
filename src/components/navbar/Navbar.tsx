import Avatar from '../../assets/images/avatar.png'
import './Navbar.scss'

const Navbar = () => {
  return (
		<nav>
			<h2>Idrica</h2>
			<div>
				<span>Posts</span>
				<span>About us</span>
			</div>
			<img src={Avatar} alt="Avatar" />
		</nav>
  )
}

export default Navbar
