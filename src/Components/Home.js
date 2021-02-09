import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container">
            <h1 id="title">Hills of <br /> San Francisco</h1>
            <NavLink to="/project" class='home-button'>Check It Out</NavLink>
        </div>
    );
}

export default Home;