import {get, post, put} from './httpClient'

const clientUrl = 'http://localhost:3001/';

function unwrapJson(resp) {
    return resp.json();
}

function unwrapJsonWithResponse(resp) {
    return resp.json().then(json => ({response: resp, json}));
}

export const getAssessmentsById = (candidateId) => {
    const url = `${clientUrl}assessments?candidateId=${candidateId}`;

    //get assessments
    return get(url)
        .then(unwrapJsonWithResponse)
};

export const getEvaluationsForAssessment = (assessmentId) => {
    const url = `${clientUrl}evaluations?assessmentId=${assessmentId}`;

    return get(url)
        .then(unwrapJsonWithResponse);
}

//gets all skillsets and loads into memory
export const getSkillSets = () => {
    const url = `${clientUrl}skillsets`;

    return get(url)
        .then(unwrapJson)
        .then(json => {
            console.log('SKILL SETS', json);
            return json;
        });
};

export const createAssessment = (assessmentInfo) => {
    const url = `${clientUrl}assessments`;
    
    //assessment needs to have a candidate and date/time

    //return response for client to make sure everything is Aok
    return post(url, assessmentInfo)
        .then(unwrapJsonWithResponse);
};

export const addEvaluatorToAssessment = (assessmentInfo) => {
    const {id} = assessmentInfo;
    const url = `${clientUrl}assessments/${id}`;
    
    return put(url, assessmentInfo)
        .then(unwrapJsonWithResponse);
};


//
// //get evaluations for an individual
// export const getEvaluationsById = (id) => {
//
// };






