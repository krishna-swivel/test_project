/**
 * Module - Search Spell
 *
 */

import React, { Component } from "react";
import { spellSearch } from "../../Api/api";
import SpellCard from "../../components/Card/SpellCard";
import Search from "../../components/Search/Search";

class SpellSearching extends Component {
  state = {
    spells: [],
  };

  handleSpellSearch = async (formData) => {
    const spells = await spellSearch(formData);
    console.log(spells.results);
    this.setState({ spells: spells.results });
  };

  render() {
    return (
      <>
        <Search handleSpellSearch={this.handleSpellSearch} />
        {this.state.spells.length ? (
          <>
            {this.state.spells.map((spell) => (
              <SpellCard key={spell.index} spell={spell} />
            ))}
          </>
        ) : (
          <h1 style={{ color: "red" }}>Please search for a spell!</h1>
        )}
      </>
    );
  }
}

export default SpellSearching;
