import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CharactersContext } from '../context/CharactersContext';
import CharacterCard from './CharacterCard';
import SectionContainer from './SectionContainer';

export default function CharactersContainer() {
  const { results } = useContext(CharactersContext);

  return (
    <>
      <Link
        to="/filters"
        className="py-2 mt-4 text-xl block text-center w-1/3 m-auto bg-black/50 hover:bg-black">
        Search characters
      </Link>
      <SectionContainer context={CharactersContext} title="characters">
        {!results
          ? 'loading'
          : results?.map((item) => <CharacterCard key={item.id} character={item} />)}
      </SectionContainer>
    </>
  );
}
