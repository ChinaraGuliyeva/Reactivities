import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../models/activity";
import ActivityList from "./ActivityList";

interface ActivityProps {
  activities: Activity[];
}

const ActivityDashboard = ({ activities }: ActivityProps) => {
  return (
    <Grid>
      <Grid.Column width="10">
        < ActivityList activities={activities} />
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
