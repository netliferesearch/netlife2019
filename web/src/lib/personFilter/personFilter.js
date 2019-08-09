export function alphaGroupPersons(p) {
  return p.reduce((acc, current) => {
    if (!current.name) return acc;
    // Take the first letter in the name
    const getFirstLetter = item => item.name[0].toUpperCase();
    // Check if its the first iteration
    if (acc) {
      // Check if there are any items in the key, and add the item to its array
      return {
        ...acc,
        [getFirstLetter(current)]: acc[getFirstLetter(current)]
          ? [...acc[getFirstLetter(current)], current]
          : [current]
      };
    }
    // Returns a key with the first letter in the objects name prop, and adds to object to the array
    return {
      [getFirstLetter(current)]: [current]
    };
  }, {});
}

export function nameFilter(query, personList) {
  return personList.filter(person =>
    person.name.toLowerCase().includes(query.toLowerCase())
  );
}

export function serviceFilter(query, personList) {
  if (!query) return personList;
  return personList.filter(person =>
    person.services.some(
      service => service.name.toLowerCase() === query.toLowerCase()
    )
  );
}

export function officeFilter(query, personList) {
  if (!query) return personList;
  return personList.filter(
    person => person.office.name.toLowerCase() === query.toLowerCase()
  );
}

export function filteredPersonList(
  personList,
  nameQuery = '',
  serviceQuery = '',
  officeQuery = ''
) {
  return nameFilter(
    nameQuery,
    serviceFilter(serviceQuery, officeFilter(officeQuery, personList))
  );
}
