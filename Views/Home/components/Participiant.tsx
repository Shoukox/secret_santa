import React from 'react'
import { Participant } from '../../../Models/Participant'
import { AiFillDelete } from 'react-icons/ai'
import { VscCopy } from 'react-icons/vsc'
import { encrypt } from '../../../Encryption';

interface Properties {
    participant: Participant;

    participants: Participant[];
    setParticipants: (participants: Participant[]) => void;
}

const Participiant: React.FC<Properties> = ({ participant, participants, setParticipants }: Properties) => {
    const onClick = () => {
        console.log(window);
        navigator.clipboard.writeText(window.location.host + "/secret_santa/#/show?name=" + participant.name + "&key="+ encrypt((participant.whoPaired as Participant).name));
    }
    const onDelete = (id:number) => {
        setParticipants(participants.filter(part => part.id !== id));
    }
    return (
        <div className="participiant_single">
            <span className="participiant_single__text"><span className="indexText">{participant.id + 1}.</span> {participant.name}</span>
            {
                participant.isPaired ? (
                    <span className="copyButton">
                        <button className="copyButton_btn" onClick={onClick}><VscCopy /></button>
                    </span>
                ) :
                    (
                        <span className="buttons">
                            <span className="icon_delete" onClick={() => onDelete(participant.id)}><AiFillDelete /></span>
                        </span >
                    )
            }

        </div >
    )
}

export default Participiant