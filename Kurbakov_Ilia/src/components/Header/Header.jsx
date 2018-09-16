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
        const {size, creators,children} = this.props;
        const headerClass = classNames('header', {
            'header--big': size === 'big',
            'header--medium': size === 'medium',
            'header--small': size === 'small',
        });
        return (
            <header className={headerClass}>
                {creators && <h1>Creators:</h1>}
                {creators && <ul>
                    {creators.map((creator,idx) => <li key={idx}>
                        <button onClick={this.handleClick(creator)}>{creator}</button>
                    </li>)}
                </ul>}
                <div>
                    Here:
                    {children}
                </div>
            </header>
        );
    }
}