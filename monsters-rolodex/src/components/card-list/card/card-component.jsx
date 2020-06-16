import React from 'react';
import './card-styles.css';

const Card = props => (
    <div className="card-container">
        <img alt="robot" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h2 key={props.monster.id}>{props.monster.name}</h2>
        <span>{props.monster.email}</span>
    </div>
)

export default Card;
