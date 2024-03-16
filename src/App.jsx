import React from 'react';
import Quiz from './components/Quiz/Quiz';
import { QuizProvider } from './components/Quiz/QuizContext';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <>
      
      <QuizProvider>
        <Quiz />
      </QuizProvider>
      <Toaster position="top-left" reverseOrder={false}/>
    </>
  );
}

export default App;