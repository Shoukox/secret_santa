import React from 'react'
import { Participant } from '../../../Models/Participant';

interface Properties {
    participants: Participant[];
    setParticipants: (participants: Participant[]) => void;

    participant: Participant;
    setParticipant: (participant: Participant) => void;
}

const StartButton: React.FC<Properties> = ({ participants, setParticipants, participant, setParticipant }: Properties) => {
    const onSubmit = () => {
        if (participants.length <= 2) {
            alert("Участников должно быть хотя бы 3!");
            return;
        }
        const shuffle = (array: Participant[]) => {
            let currentIndex = array.length, randomIndex;

            // While there remain elements to shuffle.
            while (currentIndex !== 0) {

                // Pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }

            return array;
        }
        const parts = [...participants];

        shuffle(parts);
        for (let i = 0; i <= parts.length - 1; i++) {
            parts[i].isPaired = false;
            parts[i].whoPaired = undefined;
        }
        console.log("starting");
        for (let i = 0; i <= parts.length - 1; i++) {
            const index = (i+1 >= parts.length) ? parts.length - (i+1) : i+1;
            const foundPart = parts[index] as Participant;

            foundPart.isPaired = true;
            parts[i].whoPaired = foundPart;

            console.log(parts[i].id + " " + foundPart.id);
        }
        setParticipants(parts);
    }
    return (
        <button className='startButton' onClick={onSubmit} type="submit" title="Start creating links">Start</button>
    )
}

export default StartButton