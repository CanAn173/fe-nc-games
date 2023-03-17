import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <header className="App-header">
            <Link to={'/reviews'}>
            <h1>Get All Reviews</h1>
            </Link>
        </header>
    )
}

export default Header