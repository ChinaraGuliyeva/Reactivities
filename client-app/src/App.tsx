import { useEffect } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import NavBar from "./layout/NavBar";
import ActivityDashboard from "./features/dashboard/ActivityDashboard";
import LoadingComponent from "./layout/LoadingComponent";
import { useStore } from "./stores/store";
import { observer } from "mobx-react-lite";

const App = () => {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading app" />;

  return (
    <>
      <NavBar />
      <Container className="reactivities-container">
        <ActivityDashboard />
      </Container>
    </>
  );
};

export default observer(App);
