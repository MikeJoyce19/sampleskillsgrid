import myAssessments from '../../../src/app/redux/reducers/myAssessments'
import {
    FETCH_MY_ASSESSMENTS_IN_FLIGHT,
    LOAD_MY_ASSESSMENTS,
    SELECT_ASSESSMENT
} from '../../../src/app/redux/myAssessmentsActions'
import deepFreeze from 'deep-freeze';

describe('myAssessments', () => {
    it('exists', () => {
        expect(myAssessments).toBeDefined();
    });

    var defaultState;
    beforeEach(() => {
        defaultState = {
            fetchInFlight: false,
            assessments: []
        };

        //throw error if mutated
        deepFreeze(defaultState);
    });

    describe('Fetch My Assessments in flight', () => {
        it('should update fetchInFlight as true', () => {
            const action = {
                type: FETCH_MY_ASSESSMENTS_IN_FLIGHT
            }
            const result = myAssessments(defaultState, action);
            expect(result.fetchInFlight).toBe(true);
        })
    });

    describe('Load my Assessments', () => {
        beforeEach(() => {
            defaultState = {
                fetchInFlight: true,
                assessments: []
            }
            deepFreeze(defaultState)
        });

        it('should set assessments to incoming assessments', () => {
            const assessmentsToCheck = ['1', '2', '3'];
            const action = {
                type: LOAD_MY_ASSESSMENTS,
                assessments: assessmentsToCheck
            };

            const result = myAssessments(defaultState, action);
            expect(result.assessments).toBe(assessmentsToCheck);
        });

        it('it should set fetchInFlight to false', () => {
            const action = {
                type: LOAD_MY_ASSESSMENTS,
                assessments: []
            };

            const result = myAssessments(defaultState, action);
            expect(result.fetchInFlight).toBe(false);
        })

    });

    describe('Select my Assessment', () => {
        it('should set currentAssessmentId', () => {
            const id = 100;
            const action = {
                type: SELECT_ASSESSMENT,
                id
            };

            const result = myAssessments(defaultState, action);
            expect(result.currentAssessmentId).toBe(id);
        })
    });

    describe('default state', () => {
        it('state shouldn\'t change for non-handled event', () => {
            const action = {
                type: 'IMMA_FAKE_TYPE'
            };

            const result = myAssessments(defaultState, action);
            expect(result).toBe(defaultState);
        })
    })
});
