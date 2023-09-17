import { useContext } from 'react';
import SectionContainer from './SectionContainer';
import { EpisodesContext } from '../context/EpisodesContext';
import EpisodeCard from './EpisodeCard';

export default function EpisodesContainer() {
  const { results, info } = useContext(EpisodesContext);

  return (
    <SectionContainer context={EpisodesContext} title="episodes">
      <span className="text-center w-full">
        Total of <b>{info.count}</b> episodes
      </span>
      {!results
        ? 'loading'
        : results?.map((item) => {
            return <EpisodeCard key={item.id} episode={item} />;
          })}
    </SectionContainer>
  );
}
