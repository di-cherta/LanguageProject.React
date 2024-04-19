import React from 'react';

export default function Card(props) {
    return (
    <div className="word-card">
        <h3 className="word-name">{props.name}</h3>
        <p className="word-transcription">{props.transcription}</p>
        <p className="word-translation">{props.translation}</p>
    </div>
    );
}
