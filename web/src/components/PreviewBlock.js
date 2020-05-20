import React from 'react';
import Image from './Image'
import PortableText from './PortableText'
import Link from './Link'

//TODO: Use TextImage component for left and right images

const caseImageRender = ({ data }, card) => {
  //Base if card is false.
  let aspectRatio = data.mainImage.aspectRatio;
  let shrinkImage = 1; //Added if needed for scaling card images etc in the future

  if (card === true) {
    aspectRatio = "1:1"
    shrinkImage = 0.5
  }

  return (
    <>
      {data?.mainImage?.image?.asset && (
        <Image
          image={data.mainImage.image}
          alt={data.mainImage.alt}
          aspectRatio={aspectRatio}
          shrinkImage={shrinkImage}
        />
      )}
    </>
  )
}

const caseTextRender = ({ data }) => {
  return (
    <>
      <h3 className="text-md">
        <Link
          slug={data.slug.current}
          title={data.title}
          className="font-lining link"
        >
          {data.title}
        </Link>
      </h3>
      {data._rawIntro?.textContent && (
        <PortableText blocks={data._rawIntro.textContent} />
      )}
    </>
  )
}

export default ({ data, nameQuery }) => {
  //Image card
  if (data.previewStyle === "image-card" || nameQuery !== "") {
    return (
      <li
        key={data.id}
        className="w-full md:w-1/3"
      >
        <div>
          <div className="mt-12" key={data.id}>
            <div className="w-2/3 md:w-4/5">
              {caseImageRender({ data }, true)}
            </div>
            <div className="w-3/4">
              {caseTextRender({ data })}
            </div>
          </div>
        </div>
      </li>
    )
  }
  //Image Left
  else if (data.previewStyle === "image-left" || data.previewStyle === null) {
    return (
      <li
        key={data.id}
      >
        <div className="w-full">
          <div className="mt-12 lg:flex" key={data.id}>
            {caseImageRender({ data }, false)}
            <div className="mt-4 lg:mt-0 w-full lg:w-2/3 lg:ml-8">
              {caseTextRender({ data })}
            </div>
          </div>
        </div>
      </li>
    )
  }
  //Image Right
  else if (data.previewStyle === "image-right") {
    return (
      <li
        key={data.id}
      >
        <div className="w-full">
          <div className="mt-12" key={data.id}>
            <div className="lg:w-2/3 lg:float-right lg:ml-8">
              {caseImageRender({ data }, false)}
            </div>
            <div className="mt-4 lg:mt-0 w-full lg:w-3/3">
              {caseTextRender({ data })}
            </div>
          </div>
        </div>
      </li>
    )
  }
  //Image Full
  else if (data.previewStyle === "image-full") {
    return (
      <li
        key={data.id}
      >
        <div className="w-full">
          <div className="mt-12" key={data.id}>
            {caseImageRender({ data }, false)}
            <div className="w-full lg:w-1/3 mt-4">
              {caseTextRender({ data })}
            </div>
          </div>
        </div>
      </li>
    )
  }
}
