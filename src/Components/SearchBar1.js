import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
  

class SearchBar extends React.Component{

state = {term: '',context: ''};

onInputChange = (event) => {
    this.setState({term: event.target.value});
};

onSearchSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term,this.state.context);
    console.log("term is " + this.state.term);
};

handleChange = (event) => {
    this.setState({context: event.target.value});
    console.log("Context is " + this.state.context);
  };

    render(){
        return (  
            <Container maxWidth="lg">
                <Paper elevation={3}>
                <FormControl >
                    <InputLabel id="demo-simple-select-label">Context</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.context}
                    onChange={this.handleChange}
                    >
                    <MenuItem value={"Company"}>Company</MenuItem>
                    <MenuItem value={"MolecularTarget"}>MolecularTarget</MenuItem>
                    <MenuItem value={"TherapeuticMolecule"}>TherapeuticMolecule</MenuItem>
                    </Select>
                </FormControl>
                <form onSubmit={this.onSearchSubmit} className = "ui form">
                    <div className = "field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value = {this.state.term}
                            onChange = {this.onInputChange} 
                        />
                    </div>
                </form>
                </Paper>
            </Container>
        )
    }
}

export default SearchBar;