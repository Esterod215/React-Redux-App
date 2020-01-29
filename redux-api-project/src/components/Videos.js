import React, { useEffect } from 'react';
import Match from './Match';

import { connect } from 'react-redux';
import { fetchVideos } from '../actions'

const Vidoes = props =>{
    useEffect(()=>{
        props.fetchVideos()
    }, [])

    
    return(
        <>
        {props.isFetching ? <p>Loading matches...</p>: null}
        <h4>Matches</h4>
        {props.matches.length? props.matches.map(match=>(
            <Match key={match.title} title={match.title} url={match.url} />
        )): null}
        </>
    );
};

const mapStateToProps = state =>{
    return{
        isFetching: state.isFetching,
        matches: state.matches
    }
}

export default connect(mapStateToProps,{ fetchVideos })(Vidoes);