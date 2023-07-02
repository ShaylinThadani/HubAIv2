import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>News</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/img-1.jpg')}
              text='OpenAI CEO Sam Altman Says AI Is ‘Most Important Step Yet’ For Humans and Tech'
              url='https://www.bloomberg.com/news/articles/2023-06-22/chatgpt-maker-openai-ceo-speaks-at-bloomberg-tech-summit'
            />
            <CardItem
              src={require('../images/img-2.jpg')}
              text='AI Teachable Moment: How ChatGPT Is Transforming the Classroom'
              url='https://www.cnet.com/tech/features/ais-teachable-moment-how-chatgpt-is-transforming-the-classroom/'
            />
            <CardItem
              src={require('../images/img-3.jpg')}
              text='I use Google Bard as my intern. Here are 5 prompts I use to get the most help from my chatbot.'
              url='https://www.businessinsider.com/how-i-use-google-bard-as-a-writer-prompt-chatbots-2023-6'
            />
          </ul>
        </div>
      </div>
      <h1>Tutorials</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/img-4.jpg')}
              text='The ULTIMATE Advanced Guide to Prompt Engineering with GPT-4 | AI Core Skills'
              url='https://www.youtube.com/watch?v=-XivIt_5oSw&ab_channel=LiamOttley'
            />
            <CardItem
              src={require('../images/img-5.jpg')}
              text='ChatGPT Prompt Engineering Course'
              url='https://www.youtube.com/watch?v=mBYu5NoXBcs&ab_channel=H-EDUCATE'
            />
            <CardItem
              src={require('../images/img-6.jpg')}
              text='The Beginners Guide to Prompt Engineering: How to Unlock LLMs like ChatGPTs Full Potential!'
              url='https://www.youtube.com/watch?v=A806OYAveYA&ab_channel=ZeroToMastery'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
