function separateBySections(allLocations = []) {
  const sectionHash = new Set();
  const sectionList = {};

  allLocations.forEach((location) =>
    !sectionHash.has(location.section)
      ? (sectionHash.add(location.section),
        (sectionList[location.section] = []),
        sectionList[location.section].push(location))
      : sectionList[location.section].push(location)
  );

  return [Object.keys(sectionList), sectionList];
}

function orderByShelf(locations = []) {
  const shelfHash = new Set();
  const shelfList = {};

  locations.forEach((subsection) =>
    !shelfHash.has(subsection.shelf)
      ? (shelfHash.add(subsection.shelf),
        (shelfList[subsection.shelf] = []),
        shelfList[subsection.shelf].push(subsection))
      : shelfList[subsection.shelf].push(subsection)
  );

  return [Object.keys(shelfList), shelfList];
}

module.exports = { separateBySections, orderByShelf };
