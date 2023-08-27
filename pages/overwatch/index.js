import Layout from "../../components/layoutOverwatch.js";
import table from "../../styles/Table.module.css";
import Team from "../../data/team.js";

export default function Overwatch() {
  return (
    <Layout>
      <h3>Roster</h3>
      <br />
      <table className={table.table}>
        <thead className={table.thead}>
          <tr className={table.row}>
            <th className={table.th}>
              <span className={table.head}>Player name</span>
            </th>
            <th className={table.th}>
              <span className={table.head}>Main Role</span>
            </th>
            <th className={table.th}>
              <span className={table.head}>Off Role</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {Team.map((player) => {
            return (
              <tr key={player.id} className={table.row}>
                <td className={table.td}>
                  <span className={table.span}>{player.Name}</span>
                </td>
                <td className={table.td}>
                  <span className={table.span}>{player["Main Role"]}</span>
                </td>
                <td className={table.td}>
                  <span className={table.span}>{player["Off Role"]}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
}
