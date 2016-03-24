import {getAssessmentsById} from '../service/shajarClient'

export const FETCH_MY_ASSESSMENTS_IN_FLIGHT = 'FETCH_MY_ASSESSMENTS_IN_FLIGHT';
export const LOAD_MY_ASSESSMENTS = 'LOAD_MY_ASSESSMENTS';
export const SELECT_ASSESSMENT = 'SELECT_ASSESSMENT';

function fetchInFlight() {
    return {
        type: FETCH_MY_ASSESSMENTS_IN_FLIGHT
    }
}

function loadMyAssessments(assessments) {
    return {
        type: LOAD_MY_ASSESSMENTS,
        assessments
    }
}

export const selectAssessment = (id) => {
    return {
        type: SELECT_ASSESSMENT,
        id
    }
};

export const fetchMyAssessments = () => {
    return (dispatch, getState) => {
        dispatch(fetchInFlight());
        var userId = getState().user.id;
        return getAssessmentsById(userId)
            .then(({response, json}) => { //eslint-disable-line no-unused-vars
                /*if(!response.ok)*/

                dispatch(loadMyAssessments(json));
            })
    }
};