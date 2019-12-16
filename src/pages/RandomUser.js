import React from 'react';
import Navigation from './Navigation';
// import Buttons from './Buttons';

// const GetButton = styled(Buttons)`
//   background-color: #000;
//
//   :hover {
//     background-color: #000;
//     color: red;
//   }
// `

class RandomUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };

    console.log(this.state);

    this.getEmail = this.getEmail.bind(this);
  }

  numberInput = React.createRef();

  getEmail(event) {
    event.preventDefault();
    fetch('https://randomuser.me/api/?results=1')
    .then(response => response.json())
    .then(
      (result) => {
        this.setState({
          results: result.results
        });
      }
    )

    console.log('state of this', this.state.results);

  }

  render() {
    const { results } = this.state;
    console.log(results);

    return (
      <React.Fragment>
        <Navigation />
        <div className="content">
          <h1>Get your Email</h1>
          <div className="email-container">
            {results.map(result => (<p className="email" key="key" >{result.email}</p>))}
          </div>
          // <GetButton onClick={this.getEmail} title="Get Email" />
        </div>
      </React.Fragment>
    )
  }
}

export default RandomUser
