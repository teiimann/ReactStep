import { useState } from "react";

function Form() {
  const [inputValue, setInputValue] = useState(""); 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputValue); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button type="submit">Send</button> 
    </form>
  );
}

export default Form;
