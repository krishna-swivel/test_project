/**
 * Define the Api Calls.
 * Improvements -Using redux for the apis and thunk for middleware
 */

const baseUrl = "https://www.dnd5eapi.co";

export function spellSearch(formData) {
  return fetch(`${baseUrl}/api/spells/?name=${formData.query}`)
    .then((res) => res.json())
    .catch((e) => console.log(e));
}

export function getSpellDetails(spellName) {
  return fetch(`${baseUrl}/api/spells/${spellName}`)
    .then((res) => res.json())
    .catch((e) => console.log(e));
}
