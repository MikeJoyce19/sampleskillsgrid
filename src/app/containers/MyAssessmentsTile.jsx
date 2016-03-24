import AssessmentTile from '../components/AssessmentTile'
import {connect} from 'react-redux'
import {selectAssessment} from '../redux/myAssessmentsActions'

const mapStateToProps = (state) => {
    return {
        assessments: state.myAssessments.assessments,
        requestInFlight: state.myAssessments.fetchInFlight
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectAssessment: (id) => {
            dispatch(selectAssessment(id))
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AssessmentTile);



