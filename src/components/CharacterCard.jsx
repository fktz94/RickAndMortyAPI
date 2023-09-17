import { Link } from 'react-router-dom';

export default function CharacterCard({ character }) {
  const { name, id, image, species, origin } = character;
  return (
    <div className="grid grid-cols-2 rounded-md border w-96 shadow-xl bg-black/50">
      <img src={image} alt={name} className="h-full object-cover rounded" />
      <div className="mx-2 flex flex-col items-center">
        <Link
          to={`/character/${id}`}
          className="mt-2 text-2xl text-center font-bold tracking-widest  hover:text-lightBlueColor hover:cursor-pointer">
          {name}
        </Link>
        <div className="my-2 flex flex-col items-center grow justify-center">
          <span className="text-xl tracking-widest text-center">{species}</span>
          {origin.name !== 'unknown' && (
            <>
              <span className="text-sm">from</span>
              <span className="text-center tracking-widest">{origin.name}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
