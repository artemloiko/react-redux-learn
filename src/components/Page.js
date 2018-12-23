import React from 'react';
import PropTypes from 'prop-types';

class Page extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <p>
          У тебя {photos.length} фото за {year} год
        </p>
      </div>
    );
  }
}

export default Page;

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
};
