import React from 'react';
import PortableText from './PortableText'

export default ({ data }) => {
  return (
    <div className="flex flex-wrap" >
      {data.textContent.map(x4Block => (
        <div key={x4Block._key} className="w-full my-4 md:pl-16 md:pr-16 md:my-8 lg:w-1/2 ">
          {x4Block?.heading && (
            <h2 className="text-md mb-4">{x4Block.heading}</h2>
          )}
          <PortableText blocks={x4Block.textContent} />
        </div>
      )
      )}
    </div>
  )
}
