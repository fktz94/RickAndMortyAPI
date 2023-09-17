import CharacterLink from '../components/CharacterLink';

export default function listOfCharacters(characters) {
  return characters?.map((item) => {
    const id = item.split('/').slice(-1)[0];
    return <CharacterLink id={id} key={id} />;
  });
}
