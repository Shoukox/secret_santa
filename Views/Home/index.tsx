import React from 'react'
import InputField from './components/InputField'
import "./styles.css"
import { Participant } from '../../Models/Participant'
import ParticipiantsList from './components/ParticipiantsList';
import StartButton from './components/StartButton';

interface Properties{
  participants: Participant[];
  setParticipants: (participants: Participant[]) => void;

  participant: Participant;
  setParticipant: (participant: Participant) => void;
}

const Index:React.FC<Properties> = ({participants, setParticipants, participant, setParticipant}:Properties) => {

  return (
    <>
        <InputField participants={participants} setParticipants={setParticipants} participant={participant} setParticipant={setParticipant}/>
        <ParticipiantsList participants={participants} setParticipants={setParticipants}/>
        <StartButton participants={participants} setParticipants={setParticipants} participant={participant} setParticipant={setParticipant} />
    </>
    )
}

export default Index