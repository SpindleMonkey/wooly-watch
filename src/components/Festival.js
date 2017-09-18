var React = require('react');

function UserButtons(props) {
  console.log('props: ' + props);
  console.log('props: ' + props.listType);
  if (props.listType == 'visitedList') {
    return (
      <span 
        className='button buttonHorz'
        onClick={() => props.onRemoveVisited(props.festival)}>
        Delete
      </span>
    )
  } else if (props.listType == 'wishlistList') {
    return (
      <span 
        className='button buttonHorz'
        onClick={() => props.onRemoveWishlist(props.festival)}>
        Delete
      </span>
    )
  } else if (props.listType == 'adminList') {
    return (
      <span>
      <span 
        className='button buttonHorz'
        onClick={() => props.onEditFestival(props.festival)}>
        Edit
      </span>
      <span 
        className='button buttonHorz'
        onClick={() => props.onDeleteFestival(props.festival)}>
        Delete
      </span>
      </span>
    )
   } else {  // props.listType == 'userList'
    return (
      <span>
      <span 
        className='button buttonHorz'
        onClick={() => props.onAddVisited(props.festival)}>
        Visited
      </span>
      <span 
        className='button buttonHorz'
        onClick={() => props.onAddWishlist(props.festival)}>
        Wishlist
      </span>
      </span>
    )
  }
}

class Festival extends React.Component {

  render() {
    return (
      <li key={this.props.festival.name} className='festival-item'>
        <ul className='space-list-items'>
          <li>
            <h2>
              <a href={this.props.festival.url} target='_blank'>{this.props.festival.name}</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <span 
                className='button buttonHorz'
                onClick={() => this.props.onAddVisited(this.props.festival)}>
                Visited
              </span>
              <span 
                className='button buttonHorz'
                onClick={() => this.props.onAddWishlist(this.props.festival)}>
                Wishlist
              </span>
            </h2>
          </li>
          <li>a/k/a {this.props.festival.aliases}</li>
          <li>{this.props.festival.location}</li>
          <li>{this.props.festival.address}</li>
          <li>{this.props.festival.region}</li>
          <li>{this.props.festival.when}</li>
          <li>Workshops: {this.props.festival.workshops ? 'yes' : 'no'}</li>
          <li>Entrance fee: {this.props.festival.entranceFee ? 'yes' : 'no'}</li>
          <li><a href={this.props.festival.ravelryGroup} target='_blank'>Ravelry group</a></li>
        </ul>
      </li>
    )
  }

}


              // {if (this.props.listType == 'userList') 
              //   <span 
              //     className='button buttonHorz'
              //     onClick={() => this.props.onAddVisited(this.props.festival)}>
              //     Visited
              //   </span>
              //   <span 
              //     className='button buttonHorz'
              //     onClick={() => this.props.onAddWishlist(this.props.festival)}>
              //     Wishlist
              //   </span>
              // }



module.exports = Festival;