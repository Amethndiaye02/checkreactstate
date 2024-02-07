import React, { Component } from 'react';

class App extends Component {
  state = {
    personne: {
      fullName: 'Ameth Ndiaye',
      bio: 'Etudiant en fullstack Js à Gomycode.',
      imgSrc: '/Users/BBD/Desktop/Checkpoint html/Ameth.jpeg',
      profession: 'Developpeur',
    },
    shows: true,
    countTime: 0 
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        countTime: prevState.countTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { personne, shows, countTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>
          {shows ? 'Masquer le Profil' : 'Afficher le Profil'}
        </button>
        {shows && (
          <div>
            <h1>{personne.fullName}</h1>
            <img src={personne.imgSrc} alt={personne.fullName} />
            <p>{personne.bio}</p>
            <p>{personne.profession}</p>
          </div>
        )}
        
        <Timer countTime={countTime} />
      </div>
    );
  }
}

class Timer extends Component {
  render() {
    const { countTime } = this.props;
    return <div>Temps écoulé : {countTime} secondes</div>;
  }
}

export default App;
