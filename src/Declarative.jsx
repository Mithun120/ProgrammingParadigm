import React from 'react';
// import './ProgrammingParadigms.css'; 

function Declarative() {
  return (
    <div className="programming-paradigms">
      <h2>Next to that Here are some types of Declarative Paradigm</h2>

      <div className="paradigm">
        <h3>Logic Programming</h3>
        <p>
          <strong>Definition:</strong> Logic Programming is a paradigm based on formal logic. It deals
          with rules and relations. In this paradigm, you define logical rules and facts, and the
          computer uses them to make inferences or find solutions.
        </p>
        <p>
          <strong>Example:</strong> Imagine you're building an expert system to diagnose medical
          conditions. In logic programming, you can define rules like "if a patient has a fever and a
          sore throat, they may have the flu." The computer can then use these rules to make
          diagnostic suggestions based on symptoms.
        </p>
      </div>

      <div className="paradigm">
        <h3>Functional Programming</h3>
        <p>
          <strong>Definition:</strong> Functional Programming is a paradigm that treats computation as
          the evaluation of mathematical functions. It emphasizes immutability, meaning data doesn't
          change once created, and avoids side effects. Functions are treated as first-class citizens.
        </p>
        <p>
          <strong>Example:</strong> Suppose you're working with a list of numbers. In functional
          programming, you'd use functions like map to transform each number, filter to select specific
          numbers, and reduce to aggregate the data. These functions don't modify the original data;
          they create new data structures.
        </p>
      </div>

      <div className="paradigm">
        <h3>Database Programming</h3>
        <p>
          <strong>Definition:</strong> Database Programming focuses on interacting with databases to
          store, retrieve, and manipulate data. It often involves using specialized languages like SQL
          (Structured Query Language) to define, query, and manage data in a structured manner.
        </p>
        <p>
          <strong>Example:</strong> Consider a web application with a user registration feature. In
          database programming, you'd use SQL to create a database table for user data. You can then use
          SQL queries to insert new users, retrieve user information, or update user records when needed.
        </p>
      </div>
    </div>
  );
}

export default Declarative;
