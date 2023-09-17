import { useState } from 'react';

export default function useShowCharacters() {
  const [showCharacters, setShowCharacters] = useState(false);

  const handleClick = () => {
    setShowCharacters((prev) => !prev);
  };

  return { showCharacters, handleClick };
}
