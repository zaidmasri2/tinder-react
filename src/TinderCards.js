import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import firebase from "./firebase";
const firestore = firebase.firestore();
function TinderCards() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const unsubscribe = firestore
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1> Tinder Cards</h1>

      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
