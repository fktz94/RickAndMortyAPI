import { useContext } from 'react';
import SectionContainer from './SectionContainer';
import { LocationsContext } from '../context/LocationsContext';
import LocationCard from './LocationCard';

export default function LocationsContainer() {
  const { results, info } = useContext(LocationsContext);

  return (
    <SectionContainer context={LocationsContext} title="locations">
      <span className="text-center w-full">
        Total of <b>{info.count}</b> locations
      </span>
      {!results
        ? 'loading'
        : results?.map((item) => {
            return <LocationCard key={item.id} location={item} />;
          })}
    </SectionContainer>
  );
}
