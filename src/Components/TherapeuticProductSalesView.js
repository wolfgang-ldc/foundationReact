import React, { PureComponent } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
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


export default class TherapeuticProductSalesView extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  //classes = useStyles();


  render() {

    return (
      <React.Fragment >
      <CssBaseline />
      <Container maxWidth="xl">
      <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper elevation={3}>
          <BarChart
            width={700}
            height={400}
            data={this.props.Sales}
            margin={{
              top: 16, right: 16, left: 0, bottom: 24,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="YearQuarter" />
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
            <Bar dataKey="Sales_US" fill="#8884d8" />
            <Bar dataKey="Sales_ROW" fill="#6894d8" />
          </BarChart>   
        </Paper>
        </Grid>
        <Grid item xs={6}>
        <Paper elevation={3}>
          <BarChart
            width={700}
            height={400}
            data={this.props.Sales}
            margin={{
              top: 16, right: 16, left: 0, bottom: 24,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="YearQuarter" />
            <YAxis />
            <Label
              angle={270}
              position="right"
              style={{ textAnchor: 'middle' }}
            >
              Sales
            </Label>
            <Tooltip />
            <Legend />
            <Bar dataKey="TotalSales" fill="#8884d8" />
          </BarChart>   
        </Paper>
        </Grid>
        </Grid>
       </Container>      
  </React.Fragment>
    );
  }
}
//fill="#8884d8"