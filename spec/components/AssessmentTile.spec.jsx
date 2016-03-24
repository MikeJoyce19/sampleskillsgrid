import AssessmentTile from '../../src/app/components/AssessmentTile'
import ReactTestUtils from 'react-addons-test-utils'

describe('AssessmentTile', () => {
    it('exist', () => {
        expect(AssessmentTile).toBeDefined()
    });

    describe('requestInFlight', () => {
        it('should show request assessments if in flight', () => {
            var component = ReactTestUtils.renderIntoDocument(<div>
                <AssessmentTile requestInFlight={true} onSelectAssessment={() => {}}/>
            </div>).children[0];
            expect(component.textContent).toBe('Requesting Assessments')
        });

        it('should not show request assessments if not in flight', () => {
            var component = ReactTestUtils.renderIntoDocument(<div>
                <AssessmentTile assessments={[]} requestInFlight={false} onSelectAssessment={() => {}}/>
            </div>).children[0];
            expect(component.textContent).not.toBe('Requesting Assessments')
        })
    });

    describe('assessments', () => {
        it('should show message if no assessments', () => {
            var component = ReactTestUtils.renderIntoDocument(<div>
                <AssessmentTile assessments={[]} requestInFlight={false} onSelectAssessment={() => {}}/>
            </div>).children[0];
            expect(component.textContent).toBe('You have no assessments')
        })

        //no...dont want to test dom structure 
        xit('should have one element for each assessment', () => {

        })
    })
});