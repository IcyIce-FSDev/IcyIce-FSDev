import Layout from "../../../components/layoutOverwatch";
import table from "../../../styles/Table.module.css";
import Team from "../../../data/team";
import moment from "moment/moment.js";

export default function Schedules() {
  return (
    <Layout>
      <h3>Schedules</h3>
      <br />
      <table className={table.table}>
        <thead className={table.thead}>
          <tr className={table.row}>
            <th className={table.th}>
              <span className={table.head}>Player name</span>
            </th>
            <th className={table.th}>
              <span className={table.head}>Sunday</span>
            </th>
            <th className={table.th}>
              <span className={table.head}>Monday</span>
            </th>
            <th className={table.th}>
              <span className={table.head}>Tuesday</span>
            </th>
            <th className={table.th}>
              <span className={table.head}>Wednesday</span>
            </th>
            <th className={table.th}>
              <span className={table.head}>Thursday</span>
            </th>
            <th className={table.th}>
              <span className={table.head}>Friday</span>
            </th>
            <th className={table.th}>
              <span className={table.head}>Saturday</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {Team.map((player) => {
            const sundayStart = () => {
              const time = moment(player.Hours.Sunday.Start).format("h:mm a");

              if (time == "Invalid date") {
                return player.Hours.Sunday.Start;
              }

              return time;
            };

            const sundayEnd = () => {
              const time = moment(player.Hours.Sunday.End).format("h:mm a");

              if (time == "Invalid date") {
                return player.Hours.Sunday.End;
              }

              return time;
            };

            const mondayStart = () => {
              const time = moment(player.Hours.Monday.Start).format("h:mm a");

              if (time == "Invalid date") {
                return player.Hours.Monday.Start;
              }

              return time;
            };

            const mondayEnd = () => {
              const time = moment(player.Hours.Monday.End).format("h:mm a");

              if (time == "Invalid date") {
                return player.Hours.Monday.End;
              }

              return time;
            };

            const tuesdayStart = () => {
              const time = moment(player.Hours.Tuesday.Start).format("h:mm a");

              if (time == "Invalid date") {
                return player.Hours.Tuesday.Start;
              }

              return time;
            };

            const tuesdayEnd = () => {
              const time = moment(player.Hours.Tuesday.End).format("h:mm a");

              if (time == "Invalid date") {
                return player.Hours.Tuesday.End;
              }

              return time;
            };

            const wednesdayStart = () => {
              const time = moment(player.Hours.Wednesday.Start).format(
                "h:mm a"
              );

              if (time == "Invalid date") {
                return player.Hours.Wednesday.Start;
              }

              return time;
            };

            const wednesdayEnd = () => {
              const time = moment(player.Hours.Wednesday.End).format("h:mm a");

              if (time == "Invalid date") {
                return player.Hours.Wednesday.End;
              }

              return time;
            };

            const thursdayStart = () => {
              const time = moment(player.Hours.Thursday.Start).format("h:mm a");

              if (time == "Invalid date") {
                return player.Hours.Thursday.Start;
              }

              return time;
            };

            const thursdayEnd = () => {
              const time = moment(player.Hours.Thursday.End).format("h:mm a");

              if (time == "Invalid date") {
                return player.Hours.Thursday.End;
              }

              return time;
            };

            const fridayStart = () => {
              const time = moment(player.Hours.Friday.Start).format("h:mm a");

              if (time == "Invalid date") {
                return player.Hours.Friday.Start;
              }

              return time;
            };

            const fridayEnd = () => {
              const time = moment(player.Hours.Friday.End).format("h:mm a");

              if (time == "Invalid date") {
                return player.Hours.Friday.End;
              }

              return time;
            };

            const saturdayStart = () => {
              const time = moment(player.Hours.Saturday.Start).format("h:mm a");

              if (time == "Invalid date") {
                return player.Hours.Saturday.Start;
              }

              return time;
            };

            const saturdayEnd = () => {
              const time = moment(player.Hours.Saturday.End).format("h:mm a");

              if (time == "Invalid date") {
                return player.Hours.Saturday.End;
              }

              return time;
            };

            return (
              <tr key={player.id} className={table.row}>
                <td className={table.td}>
                  <span className={table.span}>{player.Name}</span>
                </td>
                <td className={table.td}>
                  <span className={table.span}>
                    {sundayStart()} to {sundayEnd()}
                  </span>
                </td>
                <td className={table.td}>
                  <span className={table.span}>
                    {mondayStart()} to {mondayEnd()}
                  </span>
                </td>
                <td className={table.td}>
                  <span className={table.span}>
                    {tuesdayStart()} to {tuesdayEnd()}
                  </span>
                </td>
                <td className={table.td}>
                  <span className={table.span}>
                    {wednesdayStart()} to {wednesdayEnd()}
                  </span>
                </td>
                <td className={table.td}>
                  <span className={table.span}>
                    {thursdayStart()} to {thursdayEnd()}
                  </span>
                </td>
                <td className={table.td}>
                  <span className={table.span}>
                    {fridayStart()} to {fridayEnd()}
                  </span>
                </td>
                <td className={table.td}>
                  <span className={table.span}>
                    {saturdayStart()} to {saturdayEnd()}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
}
