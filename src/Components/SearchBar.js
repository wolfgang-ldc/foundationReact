import React from 'react';

class SearchBar extends React.Component{

state = {searchTerm: ''};

onInputChange = (event) => {
    this.setState({term: event.target.value});
};

onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
    console.log("onFormSubmit is: " + this.state.term)
};

    render(){
        return (  
            <div className = "search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className = "ui form">
                    <div className = "field">
                        <input 
                            type="text" 
                            value = {this.state.term}
                            onChange = {this.onInputChange} 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;