import React, {Component, PropTypes} from 'react'
import AppBar from 'material-ui/lib/app-bar';
import LogoutButton from '../components/LogoutButton';
import {IndexLink} from 'react-router'
import UserAvatar from '../containers/UserAvatar'
import {connect} from 'react-redux'
import {fetchMyAssessments} from '../redux/myAssessmentsActions'

class Main extends Component {
    static propTypes = {
        fetchMyAssessments: PropTypes.func.isRequired,
        children: PropTypes.node
    }

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

    componentWillMount() {
        this.props.fetchMyAssessments();
    }

    render() {
        const styles = this.getStyles();
        return (
            <div>
                <AppBar iconElementLeft={<IndexLink to="/"><UserAvatar /></IndexLink>} iconElementRight={<LogoutButton />} title="Shajar Skills Grid - My Assessments" />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMyAssessments: () => {
            dispatch(fetchMyAssessments())
        }
    }
}

export default connect(() => ({}), mapDispatchToProps)(Main);
