import React, { PureComponent as Component } from 'react';
import axios from 'axios';
class Tarot extends Component {

  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <button onClick={this._handleClick}>Make a Reading</button>
    );
  }
}

class ReadingResult extends Component {
// You can't use conditional logic within a render (WHY) so trying to separate out the logic first but how do it make it call this function before rendering? Ternary operator not working either.

// logic() {
//   if (this.props.data) {
//     console.log(this.props.data);
//
//   } else {
//     console.log(this.props.data);
//   }
//
// }

  render() {
    // let isData = this.props.data;
    // console.log(isData);

    return (
      <div><Image url={this.props.image} key={this.props.image} />
      <div className="summary">{this.props.summary}</div>
      </div>
    );
  }
}

function Image (props) { // Functional component so this is not in any class
if (props.url) {
  return (
    <img src={props.url} alt={props.url} className="card"/>
  )
} else {
  return (
    null
  )
}
}


class Cards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: [],
      summary: ""
      // , data: false
    }
    this.fetchImages = this.fetchImages.bind(this);
  }

  fetchImages() {
    console.log('Fetching a random spread');
    axios.get('https://tarot.howlcode.com/spreads/random_card')
      .then(function (results) {
        console.log(results.data); // Results.data returns an object with 3 cards inside
        const image = results.data[0].face_image_url;
        const summary = results.data[0].short_meaning;
        this.setState({image});
        this.setState({summary});
      //   this.setState(state => ({
      //    data: true
      // }));
      }.bind(this));
  }

  render() {

    return (
      <div>
        <Tarot onClick={this.fetchImages}/>
        <ReadingResult image={this.state.image}/>
        <ReadingResult summary={this.state.summary}/>
      </div>
    )
  }        // <Image data={this.state.data} />

}

export default Cards;
