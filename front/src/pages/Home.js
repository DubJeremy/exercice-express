import React from 'react';
import { NavLink } from 'react-router-dom';
import CardList from '../components/CardList';
import { ImUserPlus } from "react-icons/im";


const Home = () => {
    return (
        <>
            <NavLink to="/addwilder">
              <ImUserPlus />  Ajouter un Wilder
            </NavLink>
            <CardList />
        </>
    );
};

export default Home;