import { Link, useParams, useNavigate } from 'react-router-dom';
import useCharacter from '../hooks/useCharacter';

export default function CharacterPage() {
  const { id } = useParams();
  const { character } = useCharacter({ id });
  const navigate = useNavigate();

  if (!character) return <span className="m-auto block w-fit">loading..</span>;

  const { name, image, status, species, gender, origin, location } = character;
  let statusColor = 'h-2 w-2 rounded-full bg-gradient-to-br ';
  switch (status) {
    case 'Alive':
      statusColor += 'from-green-500 to bg-green-700';
      break;
    case 'Dead':
      statusColor += 'from-red-500 to bg-red-700';
      break;
    default:
      statusColor = false;
      break;
  }

  return (
    <div className="my-6 mx-auto w-fit flex flex-col gap-4 tracking-widest rounded-xl bg-black/50 shadow-2xl">
      <div className="px-4 flex flex-col gap-4 items-center ">
        <h2 className="text-5xl text-center mt-6 font-semibold">{name}</h2>
        <img src={image} alt={`${name}`} className="rounded-xl" />
        <span className="flex items-center gap-2">
          <small className="relative bottom-[-2px]">Status:</small>
          <div className="flex gap-2">
            <div className={`self-center ${statusColor || 'text-xl font-bold text-gray-400'}`}>
              {!statusColor ? '?' : ''}
            </div>
            <b className="text-xl">{status}</b>
          </div>
        </span>
        <span className="flex items-center gap-2">
          <small className="relative bottom-[-2px]">Species:</small>
          <b className="text-xl">{species}</b>
        </span>
        <span className="flex items-center gap-2">
          <small className="relative bottom-[-2px]">Gender:</small>
          <b className="text-xl">{gender}</b>
        </span>
        <span className="flex items-center gap-2">
          <small className="relative bottom-[-2px]">From:</small>
          <b className="text-xl">{origin.name}</b>
          {/* <Link to=" ORIGIN URL">...</Link> */}
        </span>
        <span className="flex items-center gap-2">
          <small className="relative bottom-[-2px]">Last seen:</small>
          <b className="text-xl">{location.name}</b>
          {/* <Link to="LOCATION  URL">...</Link> */}
        </span>
      </div>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="w-full py-2 rounded-b-xl text-center font-bold text-lg text-blackColor bg-lemonColor hover:bg-blueColor hover:text-whiteColor">
        GO BACK
      </button>
    </div>
  );
}
