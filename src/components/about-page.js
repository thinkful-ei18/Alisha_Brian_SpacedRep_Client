import React from "react";
import { Link } from "react-router-dom";
import "./about-page.css";

export default function AboutPage(props) {
  return (
    <section>
      <div className="about-page">
        <h5>
          Foodie Phonetics is an application designed to help English speakers learn how to say
          their favorite foods in their new favorite language!
        </h5>

        <h5>
          Each session the user should try to correctly guess the English translation of the word
          on the current card. Each correct or incorrect guess repositions that card using a
          spaced repitition algorithm that was implemented with a singly linked list. The app
          also keeps track of your score for you per session; resetting to zero upon log out. 

        </h5>
        
      </div>
      <div className="return-button">
        <Link to="/dashboard">
          <button className="return-link">Close</button>
        </Link>
      </div>
    </section>
  );
}
