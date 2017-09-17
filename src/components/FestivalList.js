var React = require('react');

var Festival = require('./Festival');

class FestivalList extends React.Component {

  render() {
    // console.log(this.props.onAddVisited);
    // console.log(this.props.onAddWishlist);
    // console.log(this.props.festivals);

    let festivalArray = this.props.festivals.map( (festival) => {
      return (
        <Festival
          key={festival._id}
          festival={festival}
          onAddVisited={this.props.onAddVisited}
          onRemoveVisited={this.props.onRemoveVisited}
          onAddWishlist={this.props.onAddWishlist}
          onRemoveWishlist={this.props.onRemoveWishlist}
        />
      )
    })

   return (
      <ul className='festival-list'>
        {festivalArray}
      </ul>
    )
  }

}

module.exports = FestivalList;

