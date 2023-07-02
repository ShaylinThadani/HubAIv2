import React from 'react';
import '../../App.css';
import NewsTutorials from '../NewsTutorials';
import HeroSection from '../HeroLearning';
import Lessons from '../Lessons';

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