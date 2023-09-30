import React from 'react';

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
   
    flexDirection: 'column',
   // Center content horizontally
     // Center text within each element
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  paragraph: {
    marginBottom: '15px',
    lineHeight: '1.4',
  },
  link: {
    color: '#007bff',
    textDecoration: 'underline',
    textAlign: 'left', // Align link text to the left
  },
};

function ProgrammingParadigmReferences() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>References</h2>
      <p style={styles.paragraph}>
        <a href="https://java-programming.mooc.fi/part-7/1-programming-paradigms" style={styles.link}>
          Java Programming MOOC
        </a>
      </p>
      <p style={styles.paragraph}>
        <a href="https://www.geeksforgeeks.org/introduction-of-programming-paradigms/" style={styles.link}>
          GeeksforGeeks - Introduction of Programming Paradigms
        </a>
      </p>
      <p style={styles.paragraph}>
        <a href="https://cs.lmu.edu/~ray/notes/paradigms/" style={styles.link}>
          LMU - Programming Paradigms Notes
        </a>
      </p>
      <p style={styles.paragraph}>
        <a href="https://www.indicative.com/resource/programming-paradigm/" style={styles.link}>
          Indicative - Programming Paradigm Resource
        </a>
      </p>
    </div>
  );
}

export default ProgrammingParadigmReferences;
