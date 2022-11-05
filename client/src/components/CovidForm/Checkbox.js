const Checkbox = ({ label, index, isChecked, setIsChecked }) => {

  return (
    <div className="checkbox-wrapper">
      <label >
        <input type="checkbox" checked={isChecked[index]} onChange={() =>
          setIsChecked((prev) => {
            prev[index] = !prev[index];
            console.log("PREV:", prev)
            console.log("STATE:", isChecked)
            return [...prev];
          })} />
        <span>{label}</span>
      </label>
    </div>
  );
};
export default Checkbox;