import { useContext, useEffect, useState } from 'react';
import { FilteredCharactersContext } from '../context/FilteredCharactersContext';
import SectionContainer from './SectionContainer';
import CharacterCard from './CharacterCard';

function convertFiltersToString(filters) {
  const allFilters = Object.entries(filters)
    .filter((item) => item[1])
    .map((item) => item.join('='));

  return allFilters.length > 1 ? allFilters.join('&') : allFilters.toString();
}

export default function SearchCharacters() {
  const { handleSearchFilters, results, info, error } = useContext(FilteredCharactersContext);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (Object.values(formData).filter((item) => item.length >= 1).length < 1) return;
    setHasSearched(true);
    handleSearchFilters(convertFiltersToString(formData));
  };

  return (
    <>
      <div className="w-1/3 m-auto mt-6">
        <form className="flex flex-col text-lg tracking-widest gap-2" onSubmit={handleSubmit}>
          <label htmlFor="name" className="relative">
            Name:
            <input type="text" id="name" name="name" className="absolute left-20" />
          </label>
          <label htmlFor="status" className="relative">
            Status:
            <select id="status" name="status" className="absolute left-20">
              <option value="">---</option>
              <option value="alive">alive</option>
              <option value="dead">dead</option>
              <option value="unknown">unknown</option>
            </select>
          </label>
          <label htmlFor="species" className="relative">
            Species:
            <input type="text" id="species" name="species" className="absolute left-20" />
          </label>
          <label htmlFor="type" className="relative">
            Type:
            <input type="text" id="type" name="type" className="absolute left-20" />
          </label>
          <label htmlFor="gender" className="relative">
            Gender:
            <select id="gender" name="gender" className="absolute left-20">
              <option value="">---</option>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="genderless">genderless</option>
              <option value="unknown">unknown</option>
            </select>
          </label>
          <button
            type="submit"
            className="text-blackColor bg-lemonColor hover:text-lemonColor hover:bg-blueColor">
            Search
          </button>
        </form>
      </div>
      {hasSearched &&
        (error ? (
          'not found'
        ) : (
          <>
            {info && (
              <p className="mt-6 text-center">
                Total of <b>{info?.count}</b> results
              </p>
            )}
            <SectionContainer context={FilteredCharactersContext}>
              {results
                ? results?.map((item) => <CharacterCard key={item.id} character={item} />)
                : 'loading'}
            </SectionContainer>
          </>
        ))}
    </>
  );
}
