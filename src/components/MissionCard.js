import React from 'react';
import PropType from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{name}</p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropType.string,
  year: PropType.string,
  country: PropType.string,
  destination: PropType.string,
};
MissionCard.defaultProps = {
  name: 'Apollo 11',
  year: '1960',
  country: 'USA',
  destination: 'Lua',
};

export default MissionCard;
