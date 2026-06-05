import { useState } from "react";

function App() {
  const notifications = [
    {
      id: 1,
      type: "Placement",
      message: "Meta Platforms Inc. hiring",
      timestamp: "2026-06-05 00:10:46",
    },
    {
      id: 2,
      type: "Result",
      message: "external",
      timestamp: "2026-06-05 04:10:01",
    },
    {
      id: 3,
      type: "Event",
      message: "induction",
      timestamp: "2026-06-04 21:01:16",
    },
  ];

  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? notifications
      : notifications.filter((n) => n.type === filter);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Notifications</h1>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option>All</option>
        <option>Placement</option>
        <option>Result</option>
        <option>Event</option>
      </select>

      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Message</th>
            <th>Timestamp</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((n) => (
            <tr key={n.id}>
              <td>{n.type}</td>
              <td>{n.message}</td>
              <td>{n.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;