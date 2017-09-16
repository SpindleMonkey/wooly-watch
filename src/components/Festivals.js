var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

function SelectFilter(props) {
  var filters = [ 'All', 'By State', 'By Region' ];

  return (
    <ul className='filters'>
      {filters.map(function(filtr) {
        return (
          <li 
            style={filtr === props.selectedFilter ? { color: '#3e6b6f' } : null }
            onClick={props.onSelect.bind(null, filtr)} 
            key={filtr}>
            {filtr}
          </li>
        )
      })}
    </ul>
  )
}

SelectFilter.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};


function FestivalList(props) {
  return (
    <ul className='festival-list'>
      {props.festivals.map(function(festival, index) {
        return (
          <li key={festival.name} className='festival-item'>
            <ul className='space-list-items'>
              <li><a href={festival.url}>{festival.name}</a></li>
              <li>a/k/a {festival.aliases}</li>
              <li>{festival.location}</li>
              <li>{festival.address}</li>
              <li>{festival.when}</li>
              <li>Workshops: {festival.workshops ? 'yes' : 'no'}</li>
              <li>Entrance fee: {festival.entranceFee ? 'yes' : 'no'}</li>
              <li><a href={festival.ravelryGroup}>Ravelry group</a></li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

FestivalList.propTypes = {
  festivals: PropTypes.array.isRequired
};


class Festivals extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'All',
      repos: null
    };

    this.updateFilter = this.updateFilter.bind(this);
  }

  componentDidMount() {
    this.updateFilter(this.state.selectedFilter);
  }

  updateFilter(filter) {
    this.setState(function() {
      return {
        selectedFilter: filter,
        festivals: null
      }
    });

    api.fetchFestivals(this.state.selectedFilter)
      .then(function(festivals) {
        this.setState(function() {
          return {
            festivals: festivals
          }
        })
      }.bind(this)); 
  }

  render() {
    return (
      <div>
        <SelectFilter 
          selectedFilter={this.state.selectedFilter}
          onSelect={this.updateFilter}
        />
        {!this.state.festivals
          ? <p> ...loading... </p>
          : <FestivalList festivals={this.state.festivals} />
        }
      </div>
    )
  }

}

module.exports = Festivals;