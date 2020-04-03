// 'Tailwind Grid' vs 'Bootstrap 4 Grid'
//
// w-1/6    col-md-2
// w-1/4    col-md-3
// w-1/3    col-md-4
// w-1/2    col-md-6
//
// w-2/3    col-md-8
// w-3/4    col-md-9
// w-5/6    col-md-10

export const setSplitType = division => {
  let divisionType = '';
  switch (division) {
    case '50-50':
      divisionType = '50-50';
      break;
    case '25-75':
      divisionType = '25-75';
      break;
    case '75-25':
      divisionType = '75-25';
      break;
    case '40-60':
      divisionType = '40-60';
      break;
    case '60-40':
      divisionType = '60-40';
      break;
    default:
      // Syntax sugar, we default to '50-50'
      divisionType = '50-50';
      break;
  }
  return `split-${divisionType}`;
};

export const setSplitClass = (splitDivision, colNr) => {
  let classCol1 = '';
  let classCol2 = '';
  const fallback = 'w-1/2';
  if (splitDivision && colNr) {
    // Note: fallback class is 50-50, so we always fallback to 'col-md-6'
    if (splitDivision === '25-75') {
      classCol1 = colNr === 1 ? 'w-1/4' : fallback;
      classCol2 = colNr === 2 ? 'w-3/4' : fallback;
    }
    if (splitDivision === '75-25') {
      classCol1 = colNr === 1 ? 'w-3/4' : fallback;
      classCol2 = colNr === 2 ? 'w-1/4' : fallback;
    }
    if (splitDivision === '40-60') {
      classCol1 = colNr === 1 ? 'w-1/3' : fallback;
      classCol2 = colNr === 2 ? 'w-2/3' : fallback;
    }
    if (splitDivision === '60-40') {
      classCol1 = colNr === 1 ? 'w-2/3' : fallback;
      classCol2 = colNr === 2 ? 'w-1/3' : fallback;
    }
    // Syntax sugar
    if (splitDivision === '50-50') {
      classCol1 = fallback;
      classCol2 = fallback;
    }
    return classCol1 && classCol2
      ? colNr === 2
        ? classCol2
        : classCol1
      : fallback;
  }
  process.env.NODE_ENV !== 'test' &&
    console.warn(
      `[setSplitClass]: splitDivision (${splitDivision}) or colNr (${colNr}) is undefined`
    );
  return fallback;
};
