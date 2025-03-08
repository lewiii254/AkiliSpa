import React from 'react';


const Resources = () => {
  const resources = [
    { title: '5-Min Breathing Exercise', url: 'https://www.youtube.com/watch?v=example' },
    { title: 'Coping with Anxiety', url: 'https://www.example.com/anxiety' },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-calm-blue text-center mb-6">Resources</h1>
      <div className="mb-8 text-center">
        <h3 className="text-xl font-semibold text-calm-blue mb-4">Breathing Exercise</h3>
        <div className="w-24 h-24 bg-calm-blue rounded-full mx-auto animate-breathe"></div>
        <p className="mt-4 text-gray-600">Inhale... Exhale...</p>
      </div>
      <ul className="space-y-2 max-w-md mx-auto">
        {resources.map((res, idx) => (
          <li key={idx} className="bg-white p-4 rounded-lg shadow-md">
            <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-calm-blue hover:underline">
              {res.title}
            </a>
          </li>
        ))}
      </ul>
      <a href="/dashboard" className="block mt-6 text-center text-calm-blue border border-calm-blue py-2 px-4 rounded-lg hover:bg-calm-blue hover:text-white transition duration-300">
        Back to Dashboard
      </a>
    </div>
  );
};

export default Resources;