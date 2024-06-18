import { useState } from 'react';
import axios from 'axios';

function App() {
  const [sum, setSum] = useState(null)
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const number1 = formData.get('number1');
    const number2 = formData.get('number2');
    const number3 = formData.get('number3');

    try {
      const response = await axios.post("http://localhost:3000/data", {
        number1: parseInt(number1),
        number2: parseInt(number2),
        number3: parseInt(number3)
      });

      console.log(response.data); // Log the response data
      setSum(response.data.sum)
      // Optionally, you can handle state updates or success messages here

    } catch (error) {
      console.error("Fetch error:", error);
    }

    event.target.reset();
  };

  return (
    <div className="App">
      <form id="myForm" onSubmit={handleSubmit} >
        <label htmlFor="number1">Number 1:</label>
        <input type="number" id="number1" name="number1" required />

        <label htmlFor="number2">Number 2:</label>
        <input type="number" id="number2" name="number2" required />

        <label htmlFor="number3">Number 3:</label>
        <input type="number" id="number3" name="number3" required />

        <button type="submit">Submit</button>
      </form>
      <div>

        Sum: {sum}
      </div>
    </div>
  );
}

export default App;
