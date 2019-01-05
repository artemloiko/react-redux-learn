import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div className="ib user">
        <p>Привет, {name}!</p>
      </div>
    );
  }
}

export default User;

User.propTypes = {
  name: PropTypes.string.isRequired,
};
