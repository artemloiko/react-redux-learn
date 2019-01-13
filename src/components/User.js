import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {
  renderTemplate = () => {
    const { error, name, isFetching } = this.props;
    if (error) {
      return <p>Login error, please reload the page</p>;
    }
    if (isFetching) {
      return <p>Loading...</p>;
    }

    if (name) {
      return <p>Hi, {name}</p>;
    } else {
      return (
        <button className="btn" onClick={this.props.handleLogin}>
          Login
        </button>
      );
    }
  };
  render() {
    return <div className="ib user">{this.renderTemplate()}</div>;
  }
}

export default User;

User.propTypes = {
  name: PropTypes.string.isRequired,
};
