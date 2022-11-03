import { React, useState } from 'react';
import Checkbox from './Checkbox';

const questions = [
  { name: "Fever > 38°C ot think you have a fever or chills" },
  { name: "Cough" },
  { name: "Sore throat/hoarse voice" },
  { name: "Shortness of breath/ breathing difficulties" },
  { name: "Loss of taste or smell" },
  { name: "Vomiting or diarrhea for more than 24 gours" }
];

function CovidForm() {


  return (
    <div className="Covid description text-left">
      <p className="description text-center">DO YOU HAVE ANY OF THE FOLLOWING SYMPTOMS:</p>
      <ul className="description list-unstyled"  >

        {questions.map(({ name }, index) => {
          return (
            <li key={index}>
              <div className="checkbox-wrapper">

                  <Checkbox label = {name}></Checkbox>
                 
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CovidForm;