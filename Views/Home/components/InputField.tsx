import React from 'react'
import { Participant } from '../../../Models/Participant';

interface Properties{
    participants: Participant[];
    setParticipants: (participants: Participant[]) => void;
  
    participant: Participant;
    setParticipant: (participant: Participant) => void;
  }
const InputField: React.FC<Properties> = ({participants, setParticipants, participant, setParticipant}:Properties) => {
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(participant.name === "")
        {
            console.log("participants name is nothing!");
            return;
        }

        setParticipants([...participants, new Participant(participants.length >= 1 ? participants[participants.length-1].id + 1 : 0, participant.name, participant.isPaired, undefined)])
        setParticipant(new Participant(-1, "", participant.isPaired, undefined));

    };
    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParticipant(new Participant(-1, e.target.value, participant.isPaired, undefined))
    };
    return (
        <form className="inputField" onSubmit={onSubmit}>
            <input placeholder="Tippe..." value={participant.name} onChange={onTextChange}></input>
            <button type="submit" title="Add participant">Add</button>
        </form>
    )
}

export default InputField