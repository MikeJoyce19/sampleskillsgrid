import React, {Component} from 'react'
import MyAssessmentsTile from './MyAssessmentsTile'

//this is where create assessment, your assessments and upcoming evaluations are

class Dashboard extends Component {
    getStyles() {
        const styles = {
            title: {
                paddingBottom: '.3em',
                fontSize: '1.5em',
                lineHeight: '1.334',
                borderBottom: '1px solid #eee',
                fontFamily: 'Roboto,sans-serif',
                marginBottom: '16px',
                fontWeight: 400
            }
        };

        return styles;
    }
    render() {
        const styles = this.getStyles();
        return (
            <div>
                <h2 style={styles.title}>Dashboard</h2>
                <MyAssessmentsTile />
            </div>
        )
    }
}

export default Dashboard;
