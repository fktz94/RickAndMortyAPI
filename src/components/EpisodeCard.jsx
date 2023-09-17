import listOfCharacters from '../services/listOfCharacters';
import useShowCharacters from '../hooks/useShowCharacters';
import ShowCharactersButton from './ShowCharactersButton';
import Card from './Card';

export default function EpisodeCard({ episode }) {
  const { air_date: airDate, characters, episode: episodeId, name } = episode;
  const { handleClick, showCharacters } = useShowCharacters();

  return (
    <Card>
      <div className="flex flex-col gap-4">
        <span className="text-center text-lg font-semibold tracking-widest">{name}</span>
        <span>{episodeId}</span>
        <span>{airDate}</span>
      </div>

      <ShowCharactersButton
        handleClick={handleClick}
        showCharacters={showCharacters}
        type="characters"
      />

      {showCharacters && listOfCharacters(characters)}
    </Card>
  );
}
