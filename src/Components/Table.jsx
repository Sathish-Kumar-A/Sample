import PropTypes from "prop-types"

const Table = ({data}) => {
  return (
  <table style={{ borderCollapse: "collapse", width: "100%" }}>
  <thead>
    <tr style={{ border: "1px solid black" }}>
      <th style={{ textAlign: "center", border: "1px solid black", padding: "10px" }}>Name</th>
      <th style={{ border: "1px solid black", padding: "10px" }}>UserName</th>
      <th style={{ border: "1px solid black", padding: "10px" }}>Email</th>
      <th style={{ border: "1px solid black", padding: "10px" }}>Website</th>
      <th style={{ border: "1px solid black", padding: "10px" }}>Company Name</th>
    </tr>
  </thead>
  <tbody>
    {data.map(({ name, email, website, company, username }, index) => (
      <tr key={index} style={{ border: "1px solid black" }}>
        <td style={{ padding: "10px", textAlign: "center", border: "1px solid black" }}>{name}</td>
        <td style={{ padding: "10px", border: "1px solid black" }}>{username}</td>
        <td style={{ padding: "10px", border: "1px solid black" }}>{email}</td>
        <td style={{ padding: "10px", border: "1px solid black" }}>{website}</td>
        <td style={{ padding: "10px", border: "1px solid black" }}>{company?.name}</td>
      </tr>
    ))}
  </tbody>
</table>

  )
}

Table.propTypes = {
    data:PropTypes.array
}

export default Table