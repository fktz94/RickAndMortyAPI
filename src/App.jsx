import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharactersContainer from './components/CharactersContainer';
import { CharactersProvider } from './context/CharactersContext';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import { EpisodesProvider } from './context/EpisodesContext';
import EpisodesContainer from './components/EpisodesContainer';
import { LocationsProvider } from './context/LocationsContext';
import LocationsContainer from './components/LocationsContainer';
import CharacterPage from './components/CharacterPage';
import SearchCharacters from './components/SearchCharacters';
import { FilteredCharactersProvider } from './context/FilteredCharactersContext';

export default function App() {
  return (
    <BrowserRouter>
      <CharactersProvider>
        <FilteredCharactersProvider>
          <EpisodesProvider>
            <LocationsProvider>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="characters" element={<CharactersContainer />} />
                  <Route path="filters" element={<SearchCharacters />} />
                  <Route path="character/:id" element={<CharacterPage />} />
                  <Route path="episodes" element={<EpisodesContainer />} />
                  <Route path="locations" element={<LocationsContainer />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </LocationsProvider>
          </EpisodesProvider>
        </FilteredCharactersProvider>
      </CharactersProvider>
    </BrowserRouter>
  );
}
