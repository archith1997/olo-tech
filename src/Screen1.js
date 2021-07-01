import React, { Component } from "react";
import menu from "./menu.json"; //importing menu.json
import "./App.css"; //Default import of css styles

const res = menu.Restaurant; // Restaurant name extraction
const menuitem = menu.MenuItems; // Menu items extraction

let appeCount = menuitem.filter((count) => count.FoodType === "appetizer"); //Counting appetizers
let entCount = menuitem.filter((count) => count.FoodType === "entree"); //Counting entrees
let desCount = menuitem.filter((count) => count.FoodType === "dessert"); //Counting desserts
let priceItem = menuitem.sort((a, b) => b.Price - a.Price); // Sorting according to price items

//Counting the above count arrays
const total1 = appeCount.length;
const total2 = entCount.length;
const total3 = desCount.length;

//See console to see the menu sorted only in terms of Price
console.log(
  "count",
  menuitem.sort((a, b) => a.Price - b.Price)
);
class Screen1 extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          backgroundColor: "#F8CED3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Spartan', sans-serif",
          fontWeight: "600",
          textTransform: "capitalize",
          letterSpacing: 1,
          fontSize: 16,
          paddingTop: "10%",
        }}
      >
        <ul>
          <h1>OLO Technical Questions</h1>
          <h2> Restaurant Name - {res}</h2>
          <li> 2. No.of Appetizers - {total1} </li>
          <li> 3. No.of Entrees - {total2} </li>
          <li> 4. No.of Desserts - {total3} </li>
          <p>Sorted Menu</p>
          {priceItem
            .sort((a, b) => (a.FoodType > b.FoodType ? 1 : -1))
            .map((item, i) => (
              <li key={i}>
                Foodtype - {item.FoodType}, Name - {item.Name}, Price -{" "}
                {item.Price}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Screen1;
