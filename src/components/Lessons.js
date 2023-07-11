import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons.css';

function Lessons() {
  return (
    <div id="#lessons" className="about-us-container" role="region" aria-label="Lessons">
      <h1>Practice your Prompt Engineering!</h1>
      <div className="about-us-content">
        <div className="mission-journey-container">
          <div className="mission-journey">
            <h2>What is Prompt Engineering?</h2>
            <p>
              Prompt engineering is the practice of carefully crafting prompts or instructions given to language models to guide their responses. It involves formulating prompts in a way that elicits desired behaviors, avoids biases, and produces accurate and relevant outputs.
            </p>
            <h2>Maximizing Results through Prompt Engineering</h2>
            <p>
              To maximize the potential of prompt engineering, it is crucial to provide clear and explicit instructions to the model. By specifying desired outputs, constraints, or utilizing context-rich prompts, users can steer the language model towards generating more accurate, coherent, and tailored responses.
            </p>
            <h2>Tips:</h2>
            <ul>
              <li>Experiment with different prompt variations to explore the impact on the model's responses.</li>
              <li>Consider incorporating specific instructions, context, or constraints to guide the model towards desired behaviors.</li>
              <li>Keep refining and iterating your prompts to achieve better results, and take note of the techniques that work well for you.</li>
            </ul>
          </div>
          <div className="mission-journey">
            <div className="iframe-container">
              <iframe src="https://chateverywhere.app/" title="Chat Everywhere" role="application" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lessons;
