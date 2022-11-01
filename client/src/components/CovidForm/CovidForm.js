import { React, useState } from 'react';

const questions = [
  { name: "Fever > 38°C ot think you have a fever or chills" },
  { name: "Cough" },
  { name: "Sore throat/hoarse voice" },
  { name: "Shortness of breath/ breathing difficulties" },
  { name: "Loss of taste or smell" },
  { name: "Vomiting or diarrhea for more than 24 gours" }
];

function CovidForm() {
  const [checkedState, setCheckedState] = useState(
    new Array(questions.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="Covid description text-left">
      <p className="description text-center">DO YOU HAVE ANY OF THE FOLLOWING SYMPTOMS:</p>
      <ul className="description list-unstyled"  >
        {questions.map(({ name }, index) => {
          return (
            <li key={index}>
              <div className="checkboxes">
                <div className="checkboxes">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>

              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CovidForm;