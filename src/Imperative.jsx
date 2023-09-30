import React from 'react';
// import './ProgrammingParadigms.css'; 
function Imperative() {
  return (
    <div className="programming-paradigms">
      <h2>Let us see some Imperative paradigm types</h2>
      <div className="paradigm">
        <h3>Object-Oriented Programming (OOP)</h3>
        <p>
          <strong>Definition:</strong> Object-Oriented Programming is a paradigm that focuses on
          organizing code into objects, which have data (attributes) and methods (functions) to
          operate on that data. It promotes the idea of modeling real-world entities as objects
          and using them to structure your code.
        </p>
        <p>
          <strong>Example:</strong> Think of a "Car" as an object. It has attributes like "color,"
          "make," and "model," and methods like "start," "stop," and "accelerate." In OOP, you
          create a blueprint (class) for the "Car" and then create individual instances (objects)
          with specific characteristics.
        </p>
      </div>
      <div className="paradigm">
        <h3>Procedural Programming</h3>
        <p>
          <strong>Definition:</strong> Procedural Programming is a paradigm that focuses on writing
          code as a series of procedures or functions. It emphasizes breaking down a problem into
          smaller, manageable steps and then writing code to perform each step sequentially.
        </p>
        <p>
          <strong>Example:</strong> Imagine you're writing code to bake a cake. In procedural
          programming, you'd create functions for each step of the process, such as
          "mixIngredients," "bakeCake," and "decorateCake." You then call these functions in a
          specific order to complete the task.
        </p>
      </div>
      <div className="paradigm">
        <h3>Parallel Programming</h3>
        <p>
          <strong>Definition:</strong> Parallel Programming is a paradigm that deals with executing
          multiple tasks or processes simultaneously to improve performance and efficiency. It
          leverages multiple processors or cores to work on tasks concurrently.
        </p>
        <p>
          <strong>Example:</strong> Consider a task where you need to process a large dataset. In
          parallel programming, you can split the dataset into smaller chunks and process each
          chunk simultaneously using different processors or threads. This way, the task is
          completed faster compared to processing it sequentially.
        </p>
      </div>
    </div>
  );
}

export default Imperative;
