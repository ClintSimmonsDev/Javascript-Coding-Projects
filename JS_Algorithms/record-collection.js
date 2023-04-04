// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line

// NOTE: You must access the properties using bracket notation, not dot notation - because you're accessing variables, not direct property names.
// So - records[id] not records.id - because there is no property in the object called 'id'. By using the brackets, we're referring to the variable being 
// passed as an argument to the function that we are calling 'id' but could just as easily be called 'derp' and still work :)

// 4 requirements to complete challenge:

function updateRecords(records, id, prop, value) {
  // 1: If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
  if(prop !== 'tracks' && value !== ''){
    records[id][prop] = value;
  };
  // 2: If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
  if(prop == 'tracks' && !records[id].hasOwnProperty('tracks')){
    records[id]['tracks'] = [value];
  }
  // 3: If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
  else if(prop == 'tracks' && value !== ''){
    records[id]['tracks'].push(value);
  };
  // 4: If value is an empty string, delete the given prop property from the album.
  if(value == ''){
    delete records[id][prop];
  }
  //return updated records - console.log if you want to see the results
  console.log(records)
  return records;
}

updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");