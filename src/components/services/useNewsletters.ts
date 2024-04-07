import { useState, useEffect } from 'react';

const useNewsletters = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const getCards = async () => {
      setIsloading(true);
      try {
        const response = await fetch("/api/newsletters");
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Failed to fetch newsletters", error);
      } finally {
        setIsloading(false);
      }
    };

    getCards();
  }, []);

  return {
    cards,
    isLoading
  };
};

export default useNewsletters;
