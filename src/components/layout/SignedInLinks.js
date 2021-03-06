import React from "react";
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props) =>{
    return(
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <li> <a onClick={props.signOut}>Log Out</a></li>
            <li>
                <NavLink to='/' className='btn btn-floating pink lighten-1'>
                    {props.profile.initials}
                </NavLink>
            </li>
        </ul>

    )
};

const mapDisptchToProps = (dispatch)=>{
    return{
        signOut: ()=>dispatch(signOut())
    }
};

export default connect(null, mapDisptchToProps)(SignedInLinks);
