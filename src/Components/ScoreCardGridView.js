import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import clsx from 'clsx';

const columns = [
  { field: 'ID', headerName: 'ID', width: 70 },
  {
    field: 'Name',
    headerName: ' Name',
    width: 300,
    editable: true,
  },
  {
    field: 'Score',
    headerName: 'Score',
    width: 80,
    editable: true,
    cellClassName: (params) =>
    clsx('super-app', {
      high: params.value >= 8,
      medium: params.value > 3 & params.value < 8,
      low: params.value <= 3,
    })
  },
  {
    field: 'DownsideRisk',
    headerName: 'DownsideRisk',
    width: 100,
    editable: true,
  },
  {
    field: 'Downside',
    headerName: 'Downside',
    width: 60,
    editable: true,
  },
  {
    field: 'UpsideRisk',
    headerName: 'UpsideRisk',
    width: 100,
    editable: true,
  },
  {
    field: 'Upside',
    headerName: 'Upside',
    width: 60,
    editable: true,
  },
  {
    field: 'CurrentPrice',
    headerName: 'CurrentPrice',
    width: 100,
    editable: true,
  },
  {
    field: 'PreviousPrice',
    headerName: 'PreviousPrice',
    width: 100,
    editable: true,
  },
  {
    field: 'Difference',
    headerName: 'Difference',
    with: 100,
    editable: false,
    cellClassName: (params) =>
      clsx('super-app', {
        negative: params.value < 0,
        positive: params.value > 0,
      })
  },
  {
    field: 'Shares',
    headerName: 'Shares',
    width: 100,
    editable: true,
  },
  {
    field: 'Sector',
    headerName: 'Sector',
    width: 300,
    editable: true,
  },
];

export default function DataGridDemo(props) {

  const scoreCardGrid = props.ScoreCardList.map((n) => {
    return{
        id:n.FID,
        ID:n.FID,
        Name:n.Name,
        Score:n.OverallScore,
        DownsideRisk:n.DownsideRisk,
        Downside:n.Downside,
        UpsideRisk:n.UpsideRisk,
        Upside:n.Upside,
        CurrentPrice:n.CurrentPrice,
        PreviousPrice:n.PreviousPrice,
        Difference:((n.CurrentPrice - n.PreviousPrice) * 100)/n.PreviousPrice,
        Shares:n.Shares,
        Sector:n.Sector,
    }
  }) ; 

  return (
    <div style={{ height: 700, width: '100%' }}>
          <Box
      sx={{
        height: 700,
        width: 1,
        '& .super-app-theme--cell': {
          backgroundColor: 'rgba(224, 183, 60, 0.55)',
          color: '#1a3e72',
          fontWeight: '600',
        },
        '& .super-app.positive': {
          backgroundColor: 'rgba(157, 255, 118, 0.49)',
          color: '#1a3e72',
          fontWeight: '600',
        },
        '& .super-app.negative': {
          backgroundColor: '#d47483',
          color: '#1a3e72',
          fontWeight: '600',
        },
        '& .super-app.high': {
            backgroundColor: 'rgba(157, 255, 118, 0.49)',
            color: '#1a3e72',
            fontWeight: '600',
          },
          '& .super-app.low': {
            backgroundColor: '#d47483',
            color: '#1a3e72',
            fontWeight: '600',
          },
          '& .super-app.medium': {
            backgroundColor: 'rgba(224, 183, 60, 0.55)',
            color: '#1a3e72',
            fontWeight: '600',
          },
      }}
    >
      <DataGrid
        rows={scoreCardGrid}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
      
    </div>
  );
}