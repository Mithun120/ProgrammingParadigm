import Img from './assets/types.png'
function ProgrammingParadigmDescription() {
    return (
      <div className="programming-paradigm-description">
        <h2>Imperative Programming</h2>
        <p>
          This paradigm is like giving step-by-step instructions to a computer. It focuses on
          describing how to achieve a task. If you were baking a cake, imperative programming
          would be like listing all the ingredients and the steps to mix them together.
          In imperative programming, you explicitly specify the sequence of actions that the
        computer should take. It's a bit like following a recipe where you instruct the
        computer to perform specific actions in a specific order. This approach is particularly
        useful for tasks where the order of operations is crucial.
      </p>
      <p>
        For example, if you're writing code to control a robot's movements, imperative
        programming allows you to specify each movement step by step, ensuring precise
        control.
        </p>
        {/* Add more content for Imperative Programming */}
        <h2>Declarative Programming</h2>
        <p>
          In this paradigm, you describe what you want to achieve, and the computer figures
          out how to do it. It's like ordering food at a restaurant; you specify your preferences,
          and the chef (computer) prepares the meal accordingly.
        In declarative programming, the focus is on expressing the desired outcome without
        specifying the step-by-step procedure. Instead of telling the computer exactly how to
        perform a task, you provide a high-level description of the problem, and the system
        takes care of the implementation details.
      </p>
      <p>
        This approach is commonly used in domain-specific languages like SQL (Structured Query
        Language) for database querying. When you write an SQL query, you declare what data
        you want, and the database engine determines the most efficient way to retrieve it.
      </p>
        {/* Add more content for Declarative Programming */}
            <h3>Differentiation</h3> 
      <div>
            <img src={Img} />
      </div>
      </div>

    );
  }
  
  export default ProgrammingParadigmDescription;
  