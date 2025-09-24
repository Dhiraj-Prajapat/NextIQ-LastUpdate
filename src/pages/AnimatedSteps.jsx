import React, { useState, useEffect } from 'react';

const AnimatedSteps = () => {
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    if (restart) {
      setRestart(false);
    }
  }, [restart]);

  const handleRestart = () => {
    setRestart(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-8">
      <div className="max-w-6xl w-full flex flex-wrap justify-center gap-8 px-4">
        <Step
          number="01"
          title="Upload your content."
          subtitle="E.g video, image, etc."
          restart={restart}
        >
          <UploadContent />
        </Step>
        
        <Step
          number="02"
          title="Generate unique"
          subtitle="link"
          restart={restart}
        >
          <GenerateLink />
        </Step>
        
        <Step
          number="03"
          title="Publish your"
          subtitle="content"
          restart={restart}
        >
          <PublishContent />
        </Step>
      </div>
      
      <button 
        className="mt-8 bg-indigo-800 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-indigo-700 transition-colors"
        onClick={handleRestart}
      >
        Restart Animation
      </button>
    </div>
  );
};

const Step = ({ number, title, subtitle, children, restart }) => {
  return (
    <div className="w-full max-w-xs">
      <div className="flex items-center mb-4">
        <div className="w-14 h-14 bg-indigo-900 text-white rounded-full flex items-center justify-center text-2xl font-bold">
          {number}
        </div>
      </div>
      <div className="bg-purple-100 rounded-lg p-5 h-60 flex flex-col items-center justify-center relative overflow-hidden shadow-md">
        {React.cloneElement(children, { restart })}
      </div>
      <h3 className="text-lg font-bold mt-4">{title}</h3>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
};

const UploadContent = ({ restart }) => {
  const [key, setKey] = useState(0);
  
  useEffect(() => {
    if (restart) {
      setKey(prevKey => prevKey + 1);
    }
  }, [restart]);

  return (
    <div key={key} className="flex flex-col items-center">
      <div className="text-indigo-600 text-2xl mb-3">↑</div>
      <div className="flex flex-wrap justify-center mb-4">
        <div className="w-12 h-12 bg-purple-300 rounded-md m-1 opacity-0 animate-[fadeIn_0.5s_ease-out_0.1s_forwards]"></div>
        <div className="w-12 h-12 bg-purple-300 rounded-md m-1 opacity-0 animate-[fadeIn_0.5s_ease-out_0.3s_forwards]"></div>
        <div className="w-12 h-12 bg-purple-300 rounded-md m-1 opacity-0 animate-[fadeIn_0.5s_ease-out_0.5s_forwards]"></div>
      </div>
      <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-bold shadow-md animate-pulse">
        Upload
      </button>
    </div>
  );
};

const GenerateLink = ({ restart }) => {
  const [key, setKey] = useState(0);
  
  useEffect(() => {
    if (restart) {
      setKey(prevKey => prevKey + 1);
    }
  }, [restart]);

  return (
    <div key={key} className="w-full flex flex-col items-center">
      <div className="bg-white px-4 py-2 rounded mb-4 flex items-center space-x-2 text-sm">
        <span className="text-indigo-600">🌐</span>
        <span className="overflow-hidden whitespace-nowrap w-0 border-r-2 border-indigo-600 animate-[typing_1s_steps(20)_1s_forwards]">
          www.Firecast.Com
        </span>
      </div>
      <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-bold shadow-md animate-pulse">
        Create
      </button>
      <div className="absolute bottom-4 left-8 opacity-0 animate-[fadeIn_0.5s_ease-out_0.5s_forwards,bounce_3s_ease-in-out_2s_infinite]">
        👨
      </div>
      <div className="absolute bottom-4 right-8 opacity-0 animate-[fadeIn_0.5s_ease-out_0.8s_forwards]">
        👨‍💻
      </div>
    </div>
  );
};

const PublishContent = ({ restart }) => {
  const [key, setKey] = useState(0);
  
  useEffect(() => {
    if (restart) {
      setKey(prevKey => prevKey + 1);
    }
  }, [restart]);

  return (
    <div key={key} className="w-full flex flex-col items-center">
      <div className="bg-white px-4 py-2 rounded mb-4 flex items-center space-x-2 text-sm">
        <span className="text-indigo-600">🌐</span>
        <span className="overflow-hidden whitespace-nowrap w-0 border-r-2 border-indigo-600 animate-[typing_1s_steps(20)_1s_forwards]">
          www.Firecast.Com
        </span>
      </div>
      <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-bold shadow-md animate-pulse">
        Create
      </button>
      <div className="absolute bottom-4 left-8 opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards,bounce_3s_ease-in-out_2s_infinite]">
        👨
      </div>
      <div className="absolute bottom-4 right-8 opacity-0 animate-[fadeIn_0.5s_ease-out_1.3s_forwards]">
        👨‍💻
      </div>
    </div>
  );
};

export default AnimatedSteps;