import React, {Component, createFactory} from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import * as actionTypes from '../store/actions'



const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor:'lightGreen',
    },
    paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    },
});


class CounterPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            counter: 0
        }
    }

    incrementButton=()=>{
        this.setState({counter:this.state.counter+1})
    };

    decrementButton=()=>{
        this.setState({counter:this.state.counter-1})
    };

    addCounter=()=>{
        this.setState({counter:this.state.counter+10})
    };

    subtractCounter=()=>{
        this.setState({counter:this.state.counter-5})
    };


    render() {
        const {classes} = this.props;

        return(
            <div className={classes.root}>
                <h3 style={{textAlign:'center'}}>Counter Project with react and redux</h3>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}><p style={{fontSize:20}}>Counter Alarm: {this.props.ctr}</p></Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}><button style={{fontSize:16}} onClick={this.props.onIncrementCounter}>Increment By</button></Paper>
                    </Grid>

                    <Grid item xs={3}>
                        <Paper className={classes.paper}><button style={{fontSize:16}} onClick={this.props.onDecrementCounter}>Decrement</button></Paper>
                    </Grid>

                    <Grid item xs={3}>
                        <Paper className={classes.paper}><button style={{fontSize:16}} onClick={this.props.onAddCounter}>Add By 10</button></Paper>
                    </Grid>

                    <Grid item xs={3}>
                        <Paper className={classes.paper}><button style={{fontSize:16}} onClick={this.props.onSubtractCounter}>Subtract By 5</button></Paper>
                    </Grid>

                    <Grid item xs={5}></Grid>
                    <Grid item xs={7}>
                        <button onClick={()=>this.props.onStoredResults(this.props.ctr)}> Store Result</button>
                    </Grid>

                </Grid>

                <ul>
                    {this.props.storedResults.map((strResult)=>(
                        <li key={strResult.id}>{strResult.value}<button style={{marginLeft:'30px'}} onClick={()=>this.props.onDeleteResults(strResult.id)}>Delete</button></li>
                    ))}

                </ul>
            </div>
        )
    }


}

const mapsStateToProps= state =>{
    return{
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
};

const mapsDispatchToProps = dispatch =>{
    return{
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, val:10}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, val:5}),
        onStoredResults: (result) =>dispatch({type: actionTypes.STORED_RESULTS, result: result}),
        onDeleteResults: (id) => dispatch({type: actionTypes.DELETE_RESULTS, resultId: id}),
    }
};

CounterPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(connect(mapsStateToProps, mapsDispatchToProps)(CounterPage));
