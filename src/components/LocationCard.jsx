import useShowCharacters from '../hooks/useShowCharacters';
import listOfCharacters from '../services/listOfCharacters';
import ShowCharactersButton from './ShowCharactersButton';
import Card from './Card';

export default function LocationCard({ location }) {
  const { dimension, name, type, residents } = location;
  const { handleClick, showCharacters } = useShowCharacters();

  return (
    <Card>
      <div className="flex flex-col gap-4 tracking-wide">
        <span className="text-lg">
          Name: <b>{name}</b>
        </span>
        <span>
          Type: <b>{type}</b>
        </span>
        <span>
          Dimension: <b>{dimension}</b>
        </span>
      </div>

      <ShowCharactersButton
        handleClick={handleClick}
        showCharacters={showCharacters}
        type="residents"
      />

      {showCharacters && listOfCharacters(residents)}
    </Card>
  );
}
