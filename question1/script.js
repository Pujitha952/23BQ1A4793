const token = process.env.TOKEN;

function getPriority(type) {
  switch (type) {
    case "Placement":
      return 3;
    case "Result":
      return 2;
    case "Event":
      return 1;
    default:
      return 0;
  }
}

async function main() {
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const data = await response.json();

    const notifications = data.notifications || data;

    const sorted = notifications
      .map((n) => ({
        ...n,
        score:
          getPriority(n.Type) * 1000000000000 +
          new Date(n.Timestamp).getTime()
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    console.table(
      sorted.map((n) => ({
        Type: n.Type,
        Message: n.Message,
        Timestamp: n.Timestamp
      }))
    );
  } catch (err) {
    console.error(err);
  }
}

main();