import {
  alphaGroupPersons,
  nameFilter,
  roleFilter,
  officeFilter,
  filteredPersonList
} from './personFilter';

const testPersons = [
  {
    name: 'Olea Terrorina',
    roles: ['Designer'],
    office: {
      name: 'Netlife Design, Bergen'
    }
  },
  {
    name: 'Ole Magnus Støvern',
    roles: ['Konsulent', 'Utvikler'],
    office: {
      name: 'Netlife Design'
    }
  },
  {
    name: 'Anders',
    roles: ['Designer', 'Konsulent'],
    office: {
      name: 'Netlife Design'
    }
  }
];

test('Creates an alpha indexed object with the persons', () => {
  expect(alphaGroupPersons(testPersons)).toEqual({
    A: [
      {
        name: 'Anders',
        roles: ['Designer', 'Konsulent'],
        office: {
          name: 'Netlife Design'
        }
      }
    ],
    O: [
      {
        name: 'Olea Terrorina',
        roles: ['Designer'],
        office: {
          name: 'Netlife Design, Bergen'
        }
      },
      {
        name: 'Ole Magnus Støvern',
        roles: ['Konsulent', 'Utvikler'],
        office: {
          name: 'Netlife Design'
        }
      }
    ]
  });
});

test('it should only return persons with names containing an o', () => {
  expect(nameFilter('o', testPersons)).toEqual([
    {
      name: 'Olea Terrorina',
      roles: ['Designer'],
      office: {
        name: 'Netlife Design, Bergen'
      }
    },
    {
      name: 'Ole Magnus Støvern',
      roles: ['Konsulent', 'Utvikler'],
      office: {
        name: 'Netlife Design'
      }
    }
  ]);
});

test('it should return all persons, because there is no query', () => {
  expect(nameFilter('', testPersons)).toEqual(testPersons);
});

test('it should only return persons with the role konsulent', () => {
  expect(roleFilter('KoNsUlEnT', testPersons)).toEqual(
    expect.arrayContaining([
      {
        name: 'Anders',
        roles: ['Designer', 'Konsulent'],
        office: {
          name: 'Netlife Design'
        }
      },
      {
        name: 'Ole Magnus Støvern',
        roles: ['Konsulent', 'Utvikler'],
        office: {
          name: 'Netlife Design'
        }
      }
    ])
  );
});

test('it should return all persons because there is no role query', () => {
  expect(roleFilter('', testPersons)).toEqual(testPersons);
});

test('it should return an array with one Bergen person', () => {
  expect(officeFilter('Netlife Design, Bergen', testPersons)).toEqual([
    {
      name: 'Olea Terrorina',
      roles: ['Designer'],
      office: {
        name: 'Netlife Design, Bergen'
      }
    }
  ]);
});

test('it should return all persons because there is no office query', () => {
  expect(officeFilter('', testPersons)).toEqual(testPersons);
});

test('it should return one based on all the filters', () => {
  expect(
    filteredPersonList(testPersons, 'ol', 'desigNER', 'Netlife Design, BERGEN')
  ).toEqual([
    {
      name: 'Olea Terrorina',
      roles: ['Designer'],
      office: {
        name: 'Netlife Design, Bergen'
      }
    }
  ]);
});

test('it should return an organized object based on a filtered list', () => {
  expect(
    alphaGroupPersons(
      filteredPersonList(
        testPersons,
        'ol',
        'desigNER',
        'Netlife Design, BERGEN'
      )
    )
  ).toEqual({
    O: [
      {
        name: 'Olea Terrorina',
        roles: ['Designer'],
        office: {
          name: 'Netlife Design, Bergen'
        }
      }
    ]
  });
});

test('it should return an empty object if there are no persons', () => {
  expect(alphaGroupPersons([])).toEqual({});
});
