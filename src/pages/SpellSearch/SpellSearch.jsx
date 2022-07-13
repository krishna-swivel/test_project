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
        <h3>Spell Search</h3>
        <Search handleSpellSearch={this.handleSpellSearch} />
        {this.state.spells.length ? (
          <>
            {this.state.spells.map((spell) => (
              <SpellCard key={spell.index} spell={spell} />
            ))}
          </>
        ) : (
          <h3>Please search for a spell!</h3>
        )}
      </>
    );
  }
}

export default SpellSearching;
// function SpellSearching() {
//   const [spells, setSpells] = useState([]);

//   const handleSearch = async (data) => {
//     const spells = await spellSearch(data);
//     console.log(spells);
//     setSpells({ spells: spells.results });
//   };

//   return (
//     <>
//       <h3>Search here !!!</h3>
//       <Search handleSpellSearch={handleSearch} />
//       {spells.length ? (
//         <>
//           {spells.map((spell) => (
//             <SpellCard key={spell.index} spell={spell} />
//           ))}
//         </>
//       ) : (
//         <h3>Please search for a spell!</h3>
//       )}
//     </>
//   );
// }

// export default SpellSearching;
