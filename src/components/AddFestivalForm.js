var React = require('react');

class AddFestivalForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedWorkshops: 'yes',
      selectedFee: 'no'
    };

    this.handleWorkshopChange = this.handleWorkshopChange.bind(this);
    this.handleFeeChange = this.handleFeeChange.bind(this);
  }

  handleWorkshopChange(changeEvent) {
    this.setState(prevState => ({
      selectedWorkshops: (prevState.selectedWorkshops == 'yes') ? 'no' : 'yes'
    }))
  }

  handleFeeChange(changeEvent) {
    this.setState(prevState => ({
      selectedFee: (prevState.selectedFee == 'yes') ? 'no' : 'yes'
    }))
  }


  render() {
    return (
      <form method='post' action='/api/festival'>
        <div className='form-group'>
          <label htmlFor='festivalName'>Festival Name</label>
          <input className='form-control' type='text' name='festivalName' id='festivalName' autoFocus required />
        </div>
        <div className='form-group'>
          <label htmlFor='aliases'>Aliases</label>
          <input className='form-control' type='text' name='aliases' id='aliases' placeholder='"alias1, alias2, alias3"'/>
        </div>
        <div className='form-group'>
          <label htmlFor='location'>Location</label>
          <input className='form-control' type='text' name='location' id='location' required />
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Address</label>
          <input className='form-control' type='text' name='address' id='address' />
        </div>
        <div className='form-group'>
          <label htmlFor='state'>State</label>
          <input className='form-control' type='text' name='state' id='state' placeholder='e.g., CO, UT, WA' required />
        </div>
        <div className='form-group'>
          <label htmlFor='when'>When</label>
          <input className='form-control' type='text' name='when' id='when' required />
        </div>
        <div className='form-group'>
          <label htmlFor='url'>URL</label>
          <input className='form-control' type='text' name='url' id='url' />
        </div>
        <div className='form-group'>
          <label htmlFor='workshops'>Workshops?</label>
          <label className='radio'>
            <input type="radio" name="workshopsYes" id="workshopsYes" value="yes" 
            checked={this.state.selectedWorkshops == 'yes'}
            onChange={this.handleWorkshopChange}/> yes
          </label>
          <label className='radio'>
            <input type="radio" name="workshopsNo" id="workshopsNo" value="no" 
            checked={this.state.selectedWorkshop == 'no'}
            onChange={this.handleWorkshopChange}/> no
          </label>
        </div>
        <div className='form-group'>
          <label htmlFor='entranceFee'>Entrance fee</label>
          <label className='radio'>
            <input type="radio" name="feeYes" id="feeYes" value="yes" 
            checked={this.state.selectedFee == 'yes'}
            onChange={this.handleFeeChange}/> yes
          </label>
          <label className='radio'>
            <input type="radio" name="feeNo" id="feeNo" value="no" 
            checked={this.state.selectedFee == 'no'}
            onChange={this.handleFeeChange}/> no
          </label>
        </div>
        <input className='button' type='submit' value='add festival' />
      </form>
    )
  }

}




module.exports = AddFestivalForm;