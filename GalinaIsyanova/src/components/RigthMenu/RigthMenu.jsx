import React from 'react';
import SearchForm from 'components/SearchForm';
import CategoryForm from 'components/CategoryForm';
import SideWidget from 'components/SideWidget';
import PropTypes from 'prop-types';

export default function RigthMenu(props) {
    const { leftContentCategoryForm, rightContentCategoryForm, contentSideWidget } = props;

    return (
        <div>
            <SearchForm />
            <CategoryForm leftContent={leftContentCategoryForm} rightContent={rightContentCategoryForm}/>
            <SideWidget widgetContent={contentSideWidget}/>
        </div>
    );
}

RigthMenu.propTypes = {
    leftContentCategoryForm: PropTypes.arrayOf(PropTypes.string),
    rightContentCategoryForm: PropTypes.arrayOf(PropTypes.string),
    contentSideWidget: PropTypes.string,
};

RigthMenu.defaultProps = {
    leftContentCategoryForm: [],
    rightContentCategoryForm: [],
    contentSideWidget: '',
}