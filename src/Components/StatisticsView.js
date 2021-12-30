import React, { PureComponent } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import {
  Bar,
  XAxis,
  YAxis,
  Label,
  BarChart,
  CartesianGrid, Tooltip, Legend,
} from 'recharts';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    container: {
        maxHeight: 200,
      },
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }
  ,
}));


export default class StatisticsView extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {

    return (
      <React.Fragment >
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <Paper elevation={3}>
                <BarChart
                    width={1200}
                    height={400}
                    data={this.props.Stats}
                    margin={{
                    top: 16, right: 16, left: 0, bottom: 24,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Label
                    angle={0}
                    position="right"
                    style={{ textAnchor: 'middle' }}
                    >
                    Sales
                    </Label>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>   
            </Paper>
          </Grid>
        </Grid>    
  </React.Fragment>
    );
  }
}
