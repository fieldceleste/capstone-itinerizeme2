import React from "react";
import Autocomplete from "react-autocomplete";
import { apiRequest } from "../ApiControls";
import "../style/autocomplete.css";



export default class LocationAutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: []
    };
  }
    
    fetchLocations(t) {
      let include = "id,name,country_id";
      let url = `location.json?annotate=trigram:${encodeURIComponent(t)}&trigram=>0.25&fields=${include}&order_by=-score&count=10`;
      apiRequest(url).then(
        response => {
          this.setState({ items: response.results });
        },
        reject => console.log(reject)
      );
    }

    render() {
      return (
        <div className="auto-complete">
          <Autocomplete
            inputProps={{ id: "location-autocomplete" }}
            value={this.state.value}
            items={this.state.items}
            getItemValue={item => item.name}
  
            onSelect={(value, item) => {
              this.setState({ value, items: [item] });
              this.props.onSelectLocation(item);
            }}
            onChange={(event, value) => {
              this.setState({ value });
              this.fetchLocations(value);  
            }}
            renderItem={(item, isHighlighted) =>
              <div
                style={isHighlighted ? styles.highlightedItem : styles.item}
                key={item.id}
              >
                {item.name}
              </div>}
          />
        </div>
      );
    }
  }

  




























const styles = {
  item: {
    padding: "2px 6px",
    cursor: "default"
  },

  highlightedItem: {
    color: "white",
    background: "hsl(200, 50%, 50%)",
    padding: "2px 6px",
    cursor: "default"
  },

  menu: {
    border: "solid 1px #ccc"
  }
};