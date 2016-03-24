import React, {Component, PropTypes} from 'react'
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import {Link} from 'react-router'

export default class AssessmentTile extends Component {
    getStyles() {
        return {
            titleLink: {
                fontSize: '20px',
                lineHeight: '28px',
                paddingTop: '19px',
                marginBottom: '13px',
                letterSpacing: '0px',
                fontWeight: 500,
                color: 'rgba(0, 0, 0, 0.87)',
                fontFamily: 'Roboto,sans-serif'
            }
        }
    }

    static propTypes = {
        assessments: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            createdDate: PropTypes.number.isRequired,
            createdBy: PropTypes.string.isRequired
        })),
        requestInFlight: PropTypes.bool.isRequired,
        onSelectAssessment: PropTypes.func.isRequired
    };

    render() {
        const styles = this.getStyles();
        if (this.props.requestInFlight) {
            return <div><h4 style={styles.titleLink}>Requesting Assessments</h4></div>
        }

        if (this.props.assessments.length === 0) {
            return <div><h4 style={styles.titleLink}>You have no assessments</h4></div>
        }

        const assessments = this.props.assessments.map(a => {
            const link = `/assessments/${a.id}`;
            const parsedDate = new Date(a.createdDate).toLocaleDateString();
            return (
                <TableRow key={a.id}>
                    <TableRowColumn>{a.createdBy}</TableRowColumn>
                    <TableRowColumn>{parsedDate}</TableRowColumn>
                    <TableRowColumn><Link to={link} onClick={() => this.props.onSelectAssessment(a.id)}>Go To Assessment</Link></TableRowColumn>
                </TableRow>
            )
        });

        return (
            <div>
                <Link to="/assessments">
                    <h3 style={styles.titleLink}>Your Assessments</h3>
                </Link>
                <Table selectable={false} fixedHeader={true}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>Created By</TableHeaderColumn>
                            <TableHeaderColumn>Created On</TableHeaderColumn>
                            <TableHeaderColumn>Action</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {assessments}
                    </TableBody>
                </Table>
            </div>
        )
    }
}
