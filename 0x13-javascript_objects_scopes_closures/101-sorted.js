#!/usr/bin/node
// Import the dictionary of occurrences by user id from 101-data.js
const { dict } = require('./101-data');

// Create a new dictionary to store user ids by occurrence
const userIDsByOccurrence = {};

// Iterate through the original dictionary
for (const userID in dict) {
    const occurrence = dict[userID];

    // If the occurrence is not in the new dictionary, create a new array
    if (!userIDsByOccurrence[occurrence]) {
        userIDsByOccurrence[occurrence] = [];
    }


   userIDsByOccurrence[occurrence].push(userID);
}
console.log(userIDsByOccurrence);

