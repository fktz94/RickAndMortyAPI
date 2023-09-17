import { useContext } from 'react';
import SectionContainer from './SectionContainer';
import { LocationsContext } from '../context/LocationsContext';
import LocationCard from './LocationCard';

export default function LocationsContainer() {
  const { results } = useContext(LocationsContext);

  return (
    <SectionContainer context={LocationsContext} title="locations">
      {!results
        ? 'loading'
        : results?.map((item) => {
            return <LocationCard key={item.id} location={item} />;
          })}
    </SectionContainer>
  );
}
