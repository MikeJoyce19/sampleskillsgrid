import {FETCH_MY_ASSESSMENTS_IN_FLIGHT, LOAD_MY_ASSESSMENTS, SELECT_ASSESSMENT} from '../myAssessmentsActions'

const defaultState = {
    fetchInFlight: false,
    assessments: []
};

const myAssessments = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_MY_ASSESSMENTS_IN_FLIGHT:
            return Object.assign({}, state, {
                fetchInFlight: true
            });
        case LOAD_MY_ASSESSMENTS:
            return Object.assign({}, state, {
                fetchInFlight: false,
                assessments: action.assessments
            });
        case SELECT_ASSESSMENT:
            return Object.assign({}, state, {
                currentAssessmentId: action.id
            });
        default:
            return state;
    }
};

export default myAssessments;