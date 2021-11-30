export default function StudentCard(props) {
    const {student} = props
    return (
          <div>
            <p>{student.name}</p>
            <p>{student.surname}</p>
            <p>{student.age}</p>
          </div>
        )
  }
  