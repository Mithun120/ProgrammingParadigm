import React from 'react';

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'left', // Align text to the left
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333333',
  },
  paragraph: {
    marginBottom: '15px',
    lineHeight: '1.4',
    color: '#555555',
    textAlign: 'left', // Align text to the left
  },
  bold: {
    fontWeight: 'bold', // Make text bold
  },
};

class ResponsiveComponent extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.heading}>Let us have some Questions</h2>
        <p style={styles.paragraph}>
          <p style={styles.bold}>1. What is a programming paradigm?</p>
          a) Steps of solving a problem<br />
          b) Steps to programming<br />
          c) Steps to a programming language<br />
          d) Both a method of problem solving and an approach to programming language design<br />
          <p>Answer: option(d)</p>
        </p>
        <p style={styles.paragraph}>
          <p style={styles.bold}>2. Which programming paradigm focuses on describing the desired outcome without specifying the step-by-step procedure for achieving it?</p>
          a) Imperative Programming<br />
          b) Functional Programming<br />
          c) Declarative Programming<br />
          d) Object-Oriented Programming<br />
          <p>Answer: option(c)</p>
        </p>
        <p style={styles.paragraph}>
          <p style={styles.bold}>3. Which programming paradigm is often used for event-driven user interfaces?</p>
          a) Functional Programming<br />
          b) Declarative Programming<br />
          c) Event-Driven Programming<br />
          d) Procedural Programming<br />
          <p>Answer: option(c)</p>
        </p>
        <p style={styles.paragraph}>
          <p style={styles.bold}>4. Which of the following is not a declarative programming language?</p>
          a) JavaScript<br />
          b) SQL<br />
          c) C++<br />
          d) HTML<br />
          <p>Answer: option(c)</p>
        </p>
        <p style={styles.paragraph}>
          <p style={styles.bold}>5. What type of programming is SQL (Structured Query Language) an example of?</p>
          a) Declarative Programming<br />
          b) Functional Programming<br />
          c) Object-Oriented Programming<br />
          d) Procedural Programming<br />
          <p>Answer: option(a)</p>
        </p>
        <p style={styles.paragraph}>
          <p style={styles.bold}>6. HTML is an example of which programming paradigm?</p>
          a) Declarative Programming<br />
          b) Functional Programming<br />
          c) Object-Oriented Programming<br />
          d) Procedural Programming<br />
          <p>Answer: option(a)</p>
        </p>
        <p style={styles.paragraph}>
          <p style={styles.bold}>7. Which programming paradigm is best suited for modeling real-world entities and their relationships?</p>
          a) Declarative Programming<br />
          b) Functional Programming<br />
          c) Object-Oriented Programming<br />
          d) Procedural Programming<br />
          <p>Answer: option(c)</p>
        </p>
      </div>
    );
  }
}

export default ResponsiveComponent;
