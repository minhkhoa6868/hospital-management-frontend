import "./DepartmentList.css";

const DepartmentList = ({ departments }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Department ID</th>
            <th>Title</th>
            <th>Dean Of Department</th>
            <th>Number Of Employees</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.dcode} style={{ cursor: "pointer" }}>
              <td>{department.dcode}</td>
              <td>{department.title}</td>
              <td>{department.deanName}</td>
              <td>{department.numberOfEmployee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DepartmentList;
