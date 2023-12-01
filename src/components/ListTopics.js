import React from 'react';
import data from '../assets/data';
import Topic from './Topic';

export default function ListTopics() {
  return (
    <section>
      <ul className="flex flex-col space-y-5">
        {data.quizzes.map((item, index) => (
          <Topic key={index} title={item.title} index={index} icon={item.icon} />
        ))}
      </ul>
    </section>
  );
}
