import { Link } from 'react-router-dom';

import './Header.css';

import { connect } from 'react-redux';
import { compose } from 'redux';

const _Header = (props) => {
    return (
        <header className='header'>
            <span>Telegram 2040</span>
            <div className='menu'>
                <Link to='/' className='menu-item'>
                    Chats
                </Link>
                <Link to='/profile' className='menu-item'>
                    Profile ({props.profileName})
                </Link>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => ({
    profileName: state.profile.profileName,
});

const Header = compose(
    connect(mapStateToProps)
)(_Header);

export { Header };
