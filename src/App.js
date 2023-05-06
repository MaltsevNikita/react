
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Машинка',
          img: './img/001.jpg',
          desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
          category: 'toy',
          price: '10'
        },
        {
          id: 2,
          title: 'Медведь',
          img: './img/002.jpg',
          desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
          category: 'toy',
          price: '20'
        },
        {
          id: 3,
          title: 'Собака',
          img: './img/003.jpg',
          desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
          category: 'toy',
          price: '30'
        }
      ]
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    )
  }
}

export default App;
