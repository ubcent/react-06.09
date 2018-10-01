import './Header.css';

import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Header extends Component {
    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape({href: PropTypes.string, label: PropTypes.string})
        ).isRequired,
        size: PropTypes.oneOf(['big', 'small']),
        onButtonClick: PropTypes.func,
    };

    static defaultProps = {
        size: 'small',
        items: []
    };

    handleClick(Login) {

        return() => {
            console.log('Clicked', Login);
        }

}


    render() {
        const { header, children, onButtonClick } = this.props;
        const headerClass = classNames('header');
        return (
            <header className={`headerClass`}>
                <h3>Serafima Madan</h3>
                 <div>{children}</div>
                <div className="btn">
                    <button type="button"  className="btn btn-default"
                            onClick={this.handleClick(this.handleClick())}>Login</button></div>
            </header>
        );
    }
};