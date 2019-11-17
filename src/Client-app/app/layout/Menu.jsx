import React from 'react'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Menu = ({handleRandomSeedGeneration}) => {
    return (
        <div className="button-container" style={{textAlign: "right"}}>
            <button className="green-btn" 
            onClick={() => {
                handleRandomSeedGeneration()}}
                >
                Add Data
            </button>
            <Link to="/create">
                <button className="green-btn">
                    Create
                </button>
            </Link>
        </div>
    )
}

Menu.prototypes = {
    handleRandomSeedGeneration: PropTypes.func.isRequired
  };

export default Menu;