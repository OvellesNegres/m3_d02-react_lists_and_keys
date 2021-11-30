import StudentCard from "./StudentCard"

const studentsData = [
  { _id: "piohjsr", name: "Eli", surname: "Monserrat", age: "29" },
  { _id: "pojbe34", name: "JaviScript", surname: "Sastre", age: "26" },
  { _id: "09078yh", name: "Marco", surname: "Santos", age: "48" },
];

export default function StudentsList(props) {
  return (
    <div className="list">
      <h2>Students List</h2>
      { studentsData.map((student) => <StudentCard key={student._id} student={student} />) }
    </div>
  );
}
