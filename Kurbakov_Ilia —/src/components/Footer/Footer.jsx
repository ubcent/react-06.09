import './Footer.css';
import React, {Component} from 'react';


export default class Footer extends Component{
    render(){
        const {menu,children} = this.props;
        return(
            <footer>
                <ul className='footer_menu'>
                    {menu.map((element,idx) => <li key={idx}><a href='#'>{element}</a></li>)}
                </ul>
            </footer>
        );
    }

}