import React from "react";
import "./MainPage.css";
import { RestaurantsList } from "../RestaurantsList/RestaurantsList";
import { SearchPanel } from "../SearchPanel/SearchPanel";
import { Container } from "../Container/Container";
import { RestaurantsData } from "../data/RestaurantsData";

export class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }

  addSearchInput = value => {
    this.setState({ searchValue: value });
  };

  filterTags = restaurant => {
    for (let i = 0; i < restaurant.tags.length; i++) {
      if (
        restaurant.tags[i].name
          .toLowerCase()
          .includes(this.state.searchValue.toLowerCase()) ||
        restaurant.tags[i].uuid
          .toLowerCase()
          .includes(this.state.searchValue.toLowerCase())
      ) {
        return true;
      }
    }
    return false;
  };

  filterCategories = restaurant => {
    for (let i = 0; i < restaurant.categories.length; i++) {
      if (
        restaurant.categories[i].name
          .toLowerCase()
          .includes(this.state.searchValue.toLowerCase()) ||
        restaurant.categories[i].uuid
          .toLowerCase()
          .includes(this.state.searchValue.toLowerCase())
      ) {
        return true;
      }
    }
    return false;
  };

  render() {
    console.log("add+" + this.state.searchValue);

    return (
      <>
        <main className="main-page">
          <Container>
            <SearchPanel onInputChange={this.addSearchInput} />
            <p className="main-page__title">Kyiv restaurants</p>
            <RestaurantsList
              searchValue={this.state.searchValue}
              filterTags={this.filterTags}
              filterCategories={this.filterCategories}
            />
          </Container>
        </main>
      </>
    );
  }
}
