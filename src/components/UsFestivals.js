var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

var FestivalList = require('./FestivalList');


function SelectFilter(props) {
  var filters = [ 'All', 'By State', 'By Region', 'By Month' ];

  return (
    <ul className='filters'>
      {filters.map(function(filtr) {
        return (
          <li 
            style={filtr === props.selectedFilter ? { color: '#d0021b' } : null }
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


class UsFestivals extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'All',
      festivals: null
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

  addVisited(festival, id) {
    console.log('adding to visited', festival, id)
    api.updateVisited(festival, id).then( (res) => {
      console.log(res)
    }) 
  }

  addWishlist(festival, id) {
    console.log('adding to wishlist', festival, id)
    api.updateWishlist(festival, id).then( (res) => {
      console.log(res)
    }) 
  }

  removeVisited(festival, id) {
    console.log('removing from visited', festival);
    api.removeVisited(festival).then( (res) => {
      console.log(res)
    })
  }

  removeWishlist(festival, id) {
    console.log('removing from wishlist', festival);
    api.removeWishlist(festival).then( (res) => {
      console.log(res)
    })
  }


  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Wool Festivals in the US</h1>
        <SelectFilter 
          selectedFilter={this.state.selectedFilter}
          onSelect={this.updateFilter}
        />
        {!this.state.festivals
          ? <p> ...loading... </p>
          : <FestivalList 
              festivals={this.state.festivals} 
              listType={'userList'}
              onAddVisited={this.addVisited.bind(this)}
              onAddWishlist={this.addWishlist.bind(this)}
              onRemoveVisited={this.removeVisited.bind(this)}
              onRemoveWishlist={this.removeWishlist.bind(this)}
            />

        }
      </div>
    )
  }

}



module.exports = UsFestivals;