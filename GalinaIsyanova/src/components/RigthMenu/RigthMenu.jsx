import React, { Component } from 'react';

import SearchForm from 'components/SearchForm';
import CategoryForm from 'components/CategoryForm';
import SideWidget from 'components/SideWidget';

export default class RigthMenu extends Component {
    render() {
        const myWidgetContent = 'You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!';
        const leftCategoryForm = ['Web Design', 'HTML', 'Freebies'];
        const rightCategoryForm = ['JavaScript', 'CSS', 'Tutorials'];

        return (
            <div>
                <SearchForm />
                <CategoryForm leftContent={leftCategoryForm} rightContent={rightCategoryForm}/>
                <SideWidget widgetContent={myWidgetContent}/>
            </div>
        );
    }
}