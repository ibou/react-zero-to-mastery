import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';

const Header = (props) => {
  const { currentUser } = props;
  return (<div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
          </Link>
      <Link className='option' to='/shop'>
        CONTACT
          </Link>
      {
        currentUser ?
          <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
          :
          <Link className='option' to='/signin'>
            Sign In
              </Link>
      }


    </div>
  </div>);
}


const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

