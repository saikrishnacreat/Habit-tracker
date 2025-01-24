import React, {useEffect, useState} from 'react';
import axios from 'axios';

const DashBoard = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchHabits = async () =>{
      try {
        const response = await axios.get('http://localhost:5000/api/habits');
        setHabits(response.data);
      } catch(err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchHabits();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>

  return (
    <>
    <div>Habit Tracker Dashboard</div>
    <ul>
      {habits.map((habit) =>(
        <li key={habit._id}>
          <h2>{habit.title}</h2>
          <p> {habit.description} </p>
          <p>Status : { habit.completed ? 'Completed' : 'Not Completed' }</p>
        </li>
      ))}
    </ul>
    </>
  )
}

export default DashBoard