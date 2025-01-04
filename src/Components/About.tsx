import React from "react";
import transition from "../transition";
import { Text } from '@fluentui/react';
import "./test.css";

const About = () => {
  const messages = [
    { text: 'Message 1 on the left', side: 'left' },
    { text: 'Message 2 on the right', side: 'right' },
    { text: 'Message 3 on the left', side: 'left' },
    { text: 'Message 4 on the right', side: 'right' },
  ];

  return (
    <div className="scrollable-page">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`bubble ${message.side}`}
        >
          <Text>{message.text}</Text>
        </div>
      ))}
    </div>
  );
};

export default transition(About);
