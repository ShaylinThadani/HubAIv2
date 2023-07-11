import React from 'react';
import '../../App.css';
import NewsTutorials from '../FrenchNewsTutorials';
import HeroSection from '../FrenchHeroLearning';
import Lessons from '../FrenchLessons';

function LearningHub() {
  return (
    <>
      <HeroSection />
      <NewsTutorials/>
      <Lessons />

    </>
  );
}

export default LearningHub;