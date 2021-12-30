import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const About = () => {
    return(
        <div>

            <AppBar position="static">
                <Typography variant="h6" >
                    About DDIG - Drug Development Insight Graph
                </Typography>
            </AppBar>
            <Paper elevation={3}>
                <img alt="DDIG1" height="450" width="800" className="image" title="DDIG-Slide 1" src="http://localhost/images/DDIG1"/>
            </Paper>
            <Paper elevation={3}>
               <img alt="DDIG2" height="450" width="800" className="image" title="DDIG-Slide 2" src="http://localhost/images/DDIG2"/>
            </Paper>
            <Paper elevation={3}>
            <img alt="DDIG3" height="450" width="800" className="image" title="DDIG-Slide 3" src="http://localhost/images/DDIG3"/>
            </Paper>
 
        </div>
    )
}

export default About;