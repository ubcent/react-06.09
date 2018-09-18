import './Header.css';
import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


export default class Header extends Component {
    static propTypes={
        creators: PropTypes.arrayOf(PropTypes.string).isRequired,
        size: PropTypes.oneOf(['small','medium','big']),
    };
    static defaultProps = {
        size: 'small',
        creators: [],
    };
    handleClick(creator){
        return () =>{
            console.log('Clicked',creator);
        }
    }
    render() {
        const {menu,children} = this.props;
        const headerClass = classNames('header_menu');
        return (
            <header className={headerClass}>
             <ul>
                 {menu.map((element,idx) => <li key={idx}><a href='#'>{element}</a></li>)}
             </ul>
                <button>Login</button>
            </header>
        );
    }
}