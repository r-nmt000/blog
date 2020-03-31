import React from 'react';
import { connect } from 'react-redux'

class UserHeader extends React.Component {

    render () {
        const { user } = this.props;
        if (!user) {
            return <div>loading...</div>
        }
        return <div>{user.name}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.user.find(user => user.id === ownProps.userId)}
};

export default connect(mapStateToProps)(UserHeader);