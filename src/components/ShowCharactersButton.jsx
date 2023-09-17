import React from 'react';

export default function ShowCharactersButton({ handleClick, showCharacters, type }) {
  return (
    <button
      type="button"
      className="mt-4 text-blackColor bg-creamColor hover:text-lemonColor hover:bg-blueColor"
      onClick={handleClick}>
      {!showCharacters ? 'Show' : 'Hide'} {type}
    </button>
  );
}
