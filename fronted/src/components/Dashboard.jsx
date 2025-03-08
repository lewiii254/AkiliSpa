import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [moodScore, setMoodScore] = useState('');
  const [note, setNote] = useState('');
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchMoodLogs();
  }, []);

  const fetchMoodLogs = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get('http://localhost:5000/api/mood/history', { headers: { 'x-auth-token': token } });
    setLogs(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('http://localhost:5000/api/mood', { moodScore, note }, { headers: { 'x-auth-token': token } });
    setMoodScore('');
    setNote('');
    fetchMoodLogs();
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-calm-blue text-center mb-6">How are you today?</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Mood (1-5):</label>
          <input
            type="number"
            min="1"
            max="5"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-calm-blue"
            value={moodScore}
            onChange={(e) => setMoodScore(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Note:</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-calm-blue"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-calm-blue text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Log Mood
        </button>
      </form>
      <h3 className="text-xl font-semibold text-calm-blue mb-4">Your Mood History</h3>
      <ul className="space-y-2">
        {logs.map(log => (
          <li key={log._id} className="bg-white p-4 rounded-lg shadow-md">
            {new Date(log.date).toLocaleDateString()} - Mood: <span className="text-calm-blue">{log.moodScore}</span> {log.note && `- ${log.note}`}
          </li>
        ))}
      </ul>
      <a href="/resources" className="block mt-6 text-center text-calm-blue border border-calm-blue py-2 px-4 rounded-lg hover:bg-calm-blue hover:text-white transition duration-300">
        Resources
      </a>
    </div>
  );
};

export default Dashboard;