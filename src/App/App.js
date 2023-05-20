import { Route, Switch } from 'react-router-dom'
import React, { Component } from 'react';
import Header from '../Header/Header';
import Closet from '../Closet/Closet';
import Outfit from '../Outfit/Outfit';
import Friends from '../Friends/Friends';
import Outfits from '../Outfits/Outfits';
import Login from '../Login/Login';
import Clothes from '../clothedata';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      outFitTop: [],
      outFitBottom: [],
      outFitShoes: [],
      currentTop: [],
      currentBottom: []
    }
  }

  sortClothes = () => {
    const tops = Clothes.clothes.filter(article => article.type === 'Top')
    const bottoms = Clothes.clothes.filter(article => article.type === 'Bottom')
    const shoes = Clothes.clothes.filter(article => article.type === 'Shoes')
    this.setState({
      outFitTop: tops,
      outFitBottom: bottoms,
      isLoading: false
    })
  }
  changeOutfit = (id, type) => {
    const clothingItem = Clothes.clothes.find(article => article.id === id)

    if (type === 'top') {
      this.setState({ currentTop: clothingItem})
    } else if (type === 'bottom') {
      this.setState({ currentBottom: clothingItem})
    }
  }
  componentDidMount = () => {
    this.sortClothes()
  }
  render() {
    return (
      <main>
        <Switch>
          <Route path='/friends' render={() => (
            <Friends />
            )}
            />
             <Route path='/Login' render={() => (
            <Login />
            )}
            />
             <Route path='/Outfits' render={() => (
            <Outfits />
            )}
            />
            <Route path='/' render={() => (
              <div>
                <Header />
                <div className='main-boxes' style={{"display": "flex"}}>
                  <Closet tops={this.state.outFitTop} bottoms={this.state.outFitBottom} changeOutfit={this.changeOutfit}/>
                  <Outfit currentTop={this.state.currentTop} currentBottom={this.state.currentBottom}/>
                </div>
              </div>
              )
            }
            />
        </Switch>


      </main>

    )
  }
}

export default App;
