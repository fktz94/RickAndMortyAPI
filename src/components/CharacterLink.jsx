import { Link } from 'react-router-dom';
import useCharacter from '../hooks/useCharacter';

export default function CharacterLink({ id }) {
  const { character } = useCharacter({ id });
  if (!character) return false;
  const { name } = character;
  return (
    <Link to={`/character/${id}`} className="hover:text-brownColor">
      {name}
    </Link>
  );
}
