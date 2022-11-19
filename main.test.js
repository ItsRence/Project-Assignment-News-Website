import { sort, search, newsList } from "./main.js";

/**
 * @jest-environment jsdom
 */

test("Check if the value is existing in the list", () => {
  const inputValue = "What";
  expect(newsList.filter(value => value.includes(inputValue)).join("\n")).toContain(inputValue.sort);
})


test("Check if newsList is sorted", () => {
  expect(sort("ascending")).toEqual([
    "'Nightmare' TV show 'Euphoria — health threat or high art?",
    "Buried underpants and tea bags help scientists evaluate soil",
    "Decoder: Armenia in a bind as Ukraine war resets global order",
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Marie Colvin shined a light on war-torn corners of the world",
    "Media glare can enrich tennis pros yet imperil mental health",
    "What books should an aspiring journalist read?",
    "What films should an aspiring journalist watch?",
  ])
});

test("Check if newsList is sorted and reversed", () => {
  expect(sort("descending")).toEqual([
    "What films should an aspiring journalist watch?",
    "What books should an aspiring journalist read?",
    "Media glare can enrich tennis pros yet imperil mental health",
    "Marie Colvin shined a light on war-torn corners of the world",
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Decoder: Armenia in a bind as Ukraine war resets global order",
    "Buried underpants and tea bags help scientists evaluate soil",
    "'Nightmare' TV show 'Euphoria — health threat or high art?",
  ])
});



