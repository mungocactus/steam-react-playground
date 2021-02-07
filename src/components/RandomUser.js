import React from 'react';

class RandomUser extends React.Component {

  render() {
    const randomUser = this.props.randomUser;
    console.log(randomUser);

    return(
      <li>
        <img src={randomUser.picture.large} alt='random user'/>
        <h3>{randomUser.name.first} {randomUser.name.last}</h3>
        <p>{randomUser.location.street.number} {randomUser.location.street.name}</p>
        <p>{randomUser.location.city}</p>
        <p>{randomUser.location.state}</p>
        <p>{randomUser.dob.age}</p>
      </li>
    )
  }
}

export default RandomUser
