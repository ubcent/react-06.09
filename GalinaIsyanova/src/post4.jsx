import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import Layout from 'containers/Layout';

function App() {
    return (
        <Layout pageType="post" indexPostPage={3} />
    );
}


ReactDom.render(<App />, document.getElementById('root'));