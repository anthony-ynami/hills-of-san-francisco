import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container">
            <h1 id="title">Hills of <br /> San Francisco</h1>
            <p>A project the determines how tall a building on a hill of buildings needs to be to see the sunset from the rooftop</p>
            <p id="source">Hill gradient data taken from <a href="http://www.datapointed.net/2009/11/the-steeps-of-san-francisco/">Data Pointed</a> and <a href="https://www.sftravel.com/article/san-francisco%E2%80%99s-hills-their-dizziest">SF Travel</a> </p>
            <NavLink to="/project" class='home-button'>Check It Out</NavLink>
        </div>
    );
}

export default Home;