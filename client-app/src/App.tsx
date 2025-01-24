import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Container, List } from "semantic-ui-react";
import { Activity } from "./models/activity";
import NavBar from "./layout/NavBar";
import ActivityDashboard from "./features/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => setActivities(response.data));
  }, []);

  return (
    <>
      <NavBar />
      <Container className="reactivities-container">
        <ActivityDashboard activities={activities} />
      </Container>
    </>
  );
}

export default App;
