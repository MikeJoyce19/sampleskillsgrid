import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {selectAssessment} from '../redux/myAssessmentsActions'

export default class Assessment extends Component {
    static propTypes = {
        currentAssessment: PropTypes.shape({
            id: PropTypes.number,
            date: PropTypes.string,
            createdBy: PropTypes.string,
            evaluations: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                evaluationDate: PropTypes.number,
                evaluator: PropTypes.string
            }))
        }),
        params: PropTypes.object.isRequired,
        selectAssessment: PropTypes.func.isRequired
    };

    componentWillMount() {
        const assessmentId = this.props.params.id;
        //in case we arrive here directly via url
        this.props.selectAssessment(assessmentId);
    }

    mapEvals() {
        function dateToString(dateInMs) {
            return (new Date(dateInMs)).toLocaleDateString()
        }

        if (this.props.currentAssessment.evaluations && this.props.currentAssessment.evaluations.length !== 0) {
            return this.props.currentAssessment.evaluations.map(e => {
                return <div key={e.id}>
                    <b>Evaluation - {e.evaluator}</b>
                    <span>Evaluation Date - {dateToString(e.evaluationDate)}</span>
                </div>
            });
        }

        return <div>No Evaluations</div>
    }

    render() {
        if (!this.props.currentAssessment) {
            return <div>Loading assessment...</div>
        }

        const evals = this.mapEvals();

        return (
            <div>
                Assessment - {this.props.currentAssessment.date}
                {evals}
            </div>
        )
    }
}

function pluckCurrentAssessment(state) {
    const currentAssessment = state.myAssessments.assessments
        .filter(a => a.id.toString() === state.myAssessments.currentAssessmentId.toString())[0];

    return currentAssessment
}

const mapStateToProps = (state) => {
    return {
        currentAssessment: pluckCurrentAssessment(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectAssessment: id => {
            dispatch(selectAssessment(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Assessment)

