import { useEffect, useState } from 'react';
import { Route, useLocation } from 'react-router';
import { Routes } from 'react-router-dom';
import Snowfall from 'react-snowfall';
import './App.css';
import Home from './Views/Home';
import { Participant } from './Models/Participant';
import Show from './Views/Show';

function App() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [participant, setParticipant] = useState<Participant>(new Participant(-1, "", false, undefined));

  const onParticipantsChange = (participants: Participant[]) => {
    setParticipants(participants);

    console.log(participants);
  }
  const onParticipantChange = (participant: Participant) => {
    setParticipant(participant);
  }

  return (
    <div className="App">
      <header className="headerText">{document.title}</header>
      <Snowfall snowflakeCount={1000} speed={[1.0, 1.0]} style={{ position: 'fixed' }} />
      <Routes>
        <Route path="/" element={<Home participants={participants} setParticipants={onParticipantsChange} participant={participant} setParticipant={onParticipantChange} />} />
        <Route path="/home" element={<Home participants={participants} setParticipants={onParticipantsChange} participant={participant} setParticipant={onParticipantChange} />} />
        <Route path="/show" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
