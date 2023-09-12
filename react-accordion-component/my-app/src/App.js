import Accordion from './Accordion';
import './Accordion.css';
import { useState } from 'react';

const topics = [
  {
    id: 1,
    topicHeader: 'Grilling',
    details:
      'Grilling involves cooking food directly over an open flame or heat source, resulting in a charred exterior and a smoky flavor, often used for meats, vegetables, and seafood.',
  },
  {
    id: 2,
    topicHeader: 'Sautéing',
    details: `Sautéing is a quick cooking method that involves cooking small pieces of food in a small amount of oil or butter over high heat, creating a browned and flavorful exterior while preserving the food's natural juices.`,
  },
  {
    id: 3,
    topicHeader: 'Boiling',
    details:
      'Boiling is the process of cooking food by immersing it in boiling water, which is typically used for pasta, rice, and vegetables, where the food is submerged and cooked until tender.',
  },
  {
    id: 4,
    topicHeader: 'Baking',
    details:
      'Baking is a dry-heat cooking method that involves cooking food in an enclosed oven, using surrounding hot air to cook and brown items like bread, cakes, and casseroles.',
  },
];

function App() {
  const [isActive, setIsActive] = useState(null);

  function handleChange(topicId) {
    setIsActive((prevId) => (prevId === topicId ? null : topicId));
  }

  return (
    <Accordion
      isActive={isActive}
      topics={topics}
      handleChange={handleChange}
    />
  );
}

export default App;
