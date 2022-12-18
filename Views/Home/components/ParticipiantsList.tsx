import React from 'react'
import { Participant } from '../../../Models/Participant';
import Participiant from './Participiant';

interface Properties {
    participants: Participant[];
    setParticipants: (participants: Participant[]) => void;
}

const ParticipiantsList: React.FC<Properties> = ({ participants, setParticipants }: Properties) => {
    return (
        <div className="participiants_list">
            <span className="participants_list__header">Участники:</span>
            {participants.sort((a, b) => a.id - b.id).map(participant => (
                <Participiant participant={participant} participants={participants} setParticipants={setParticipants} key={participant.id} />
            ))}
        </div>
    )
}

export default ParticipiantsList;