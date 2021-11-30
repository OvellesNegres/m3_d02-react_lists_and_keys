// An array containing JSX elements
const numbersComponentsList = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>];
const numbersList = ["1", "2", "3", "4", "5"];

function List() {
  return (
    <div className="list">
      <h2>List</h2>
      {numbersList.map(value=><li>{value}</li>)}
    </div>
  );
}

export default List;
