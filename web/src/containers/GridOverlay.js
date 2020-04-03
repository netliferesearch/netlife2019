import React from 'react';

const GridOverlay = status => (
  <>
    {status && (
      <div className="grid-overlay h-full absolute flex flex-row z-50 -mx-4">
        <div className="w-1/12 px-4 h-full">
          <div className="bg-gridOverlay h-full" />
        </div>
        <div className="w-1/12 px-4 h-full">
          <div className="bg-gridOverlay h-full" />
        </div>
        <div className="w-1/12 px-4">
          <div className="bg-gridOverlay h-full" />
        </div>
        <div className="w-1/12 px-4 h-full">
          <div className="bg-gridOverlay h-full" />
        </div>
        <div className="w-1/12 px-4">
          <div className="bg-gridOverlay h-full" />
        </div>
        <div className="w-1/12 px-4 h-full">
          <div className="bg-gridOverlay h-full" />
        </div>
        <div className="w-1/12 px-4">
          <div className="bg-gridOverlay h-full" />
        </div>
        <div className="w-1/12 px-4 h-full">
          <div className="bg-gridOverlay h-full" />
        </div>
        <div className="w-1/12 px-4">
          <div className="bg-gridOverlay h-full" />
        </div>
        <div className="w-1/12 px-4 h-full">
          <div className="bg-gridOverlay h-full" />
        </div>
        <div className="w-1/12 px-4">
          <div className="bg-gridOverlay h-full" />
        </div>
        <div className="w-1/12 px-4 h-full">
          <div className="bg-gridOverlay h-full" />
        </div>
      </div>
    )}
  </>
);

export default GridOverlay;
