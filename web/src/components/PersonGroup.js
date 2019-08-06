import React from 'react';

import Person from '../components/Person';

const PersonsTemplate = ({ persons, groupKey }) => {
  return (
    <section
      key={groupKey}
      className="flex flex-wrap md:border-b-2 border-solid border-black border-0 pb-12"
    >
      <div className="w-full md:w-1/3 sticky md:relative top-0 z-10">
        <div className="md:text-xl text-lg leading-extra-none md:sticky top-0 md:pt-12 pt-4 md:bg-transparent bg-white pb-4 md:pb-0 border-b-2 border-solid border-back md:border-0">
          {groupKey}
        </div>
      </div>
      <div className="w-full md:w-2/3">
        {persons.map(person => (
          <div className="mt-12" key={person._id}>
            <Person
              name={person.name}
              slug={person.slug.current}
              email={person.email}
              roles={person.roles}
              phoneNumber={person.phoneNumber}
              image={person.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonsTemplate;
