import React from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    Paper,
    TableSortLabel,
} from '@material-ui/core'
import TableContainer from '@material-ui/core/TableContainer';
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles';
import { useQuery, gql } from '@apollo/client';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    container: {
        maxHeight: 500,
        color: 'blue',
      },
    title: {
        flexGrow: 1,
    },
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }
  ,
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const GET_ITEM = gql`
  query itemQuery(
    $namestring: String
    $typestring: String
  ) {
    itemsByNameAndType(
      namestring:$namestring
      typestring:$typestring
    ){
        FID
        FID_S
        Name
        AlternateNames
        NewSynonyms
        Description
        HomePage
        Type
        image
        CreationDate
    }
  }
  `

function ItemCountList() {
    let params = useParams();
    const [order, setOrder] = React.useState('asc')
    const [orderBy, setOrderBy] = React.useState('Name')
    const [page] = React.useState(0)
    const [rowsPerPage] = React.useState(100)
    const [filterState, setFilterState] = React.useState({ usernameFilter: '' })

    const classes = useStyles();

    console.log("The match value is: " + params.id.substring(0,100))
    console.log("The substring is: " + params.id.substring(1,params.id.indexOf("]")))
    console.log("The subtype is: " + params.id.substring(params.id.indexOf("]-")+2,50))

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    //const getFilter = () => {
    //    return filterState.usernameFilter.length > 0
    //       ? { Name_contains: filterState.usernameFilter }
    //        : {}
    //}


    const { loading, data, error } = useQuery(GET_ITEM, {
        variables: {
            namestring: params.id.substring(1,params.id.indexOf("]")) ,
            typestring: params.id.substring(params.id.indexOf("]-")+2,50)
        },
    })


    const handleSortRequest = (property) => {
        const newOrderBy = property
        let newOrder = 'desc'

        if (orderBy === property && order === 'desc') {
            newOrder = 'asc'
        }

        setOrder(newOrder)
        setOrderBy(newOrderBy)
    }

    return (
        <div>
        {loading && !error && <p>Loading...</p>}
        {error && !loading && <p>Error</p>}
        {data && !loading && !error && (
            <React.Fragment className={classes.root}>
            <Container maxWidth="lg">
            <AppBar position="static">
                    <Typography variant="h6" className={classes.title}>
                    Item List
                    </Typography>
                </AppBar>
                <Paper elevation={3}>
                <TableContainer component={Paper} className={classes.container}>
                    <Table aria-label="simple table">
                        <TableHead stickyHeader aria-label="sticky table">
                            <StyledTableRow>
                                <StyledTableCell align="left">FID</StyledTableCell>
                                <StyledTableCell
                                  key="Name"
                                  sortDirection={orderBy === 'Name' ? order : false}
                                >
                                  <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                                    <TableSortLabel
                                      active={orderBy === 'Name'}
                                      direction={order}
                                      onClick={() => handleSortRequest('Name')}
                                    >
                                      Name
                                    </TableSortLabel>
                                  </Tooltip>
                                </StyledTableCell>
                                <StyledTableCell align="left">Description</StyledTableCell>
                                <StyledTableCell
                                  key="CreationDate"
                                  sortDirection={orderBy === 'CreationDate' ? order : false}
                                >
                                  <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                                    <TableSortLabel
                                      active={orderBy === 'CreationDate'}
                                      direction={order}
                                      onClick={() => handleSortRequest('CreationDate')}
                                    >
                                      CreationDate
                                    </TableSortLabel>
                                  </Tooltip>
                                </StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {data.itemsByNameAndType.map(row => (
                            <StyledTableRow key={row.FID}>
                                <StyledTableCell component="th" scope="row">
                                    {row.FID}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                {
                                row.Type === "BiologicalProcess" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "BiologicalStructure" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :                                
                                row.Type === "ClinicalTrial" ? <Link to={`/clinicaltrialdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "City" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "CompanyClass" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Disease" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:Acquisition" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:BreakThroughTherapy" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:BusinessReview" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:CFDAApproval" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:ClinicalTrialInitiation" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:ClinicalTrialPhase" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:ClinicalTrialResult" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:ClinicalTrialSuspension" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:Collaboration" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:EMEAApproval" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:FDAApproval" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:FDAINDFiling" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:FDANDAFiling" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:FDAPriorityReview" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:MeetingPresentation" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:InitialPublicOffering" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:NewPublicOffering" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:NewPrivateFinancing" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:OrphanDrugDesignation" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:FDANDAFiling" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:OtherApproval" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:Patent" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> : 
                                row.Type === "Event:PressUpdate" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Event:QuarterlyEarnings" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Modality" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "MolecularTarget" ? <Link to={`/molecularTargetdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Organization:FundingSource" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "Organization:Company" ? <Link to={`/companysummary/${row.FID_S}`} >{row.Name}</Link> : 
                                row.Type === "Pathway" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> : 
                                row.Type === "Person" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> : 
                                row.Type === "Prediction:FDAPDFUA" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "ProductSales" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "ScienceProject" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "ScoreCard" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "SourceReference" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "TechnologyPlatform" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "TherapeuticArea" ? <Link to={`/itemdetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "TherapeuticMolecule" ? <Link to={`/therapeuticmoleculedetail/${row.FID_S}`} >{row.Name}</Link> :
                                row.Type === "TherapeuticProduct" ? <Link to={`/therapeuticproductdetail/${row.FID_S}`} >{row.Name}</Link> :
                                ""}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.Description}</StyledTableCell>
                                <StyledTableCell align="left">{row.CreationDate}</StyledTableCell>
                            </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>          
            </Container>
            <Typography>
              {data.itemsByNameAndType.length}
            </Typography>
        </React.Fragment>
        )}
        </div>
    )
}

export default ItemCountList;