require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import SearchForm from './SearchFormComponent.js';
import Results from './ResultsListComponent.js';

class AppComponent extends React.Component {
    render() {
        return (
        	<div>
	            <SearchForm />
	            <Results />
	        </div>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;