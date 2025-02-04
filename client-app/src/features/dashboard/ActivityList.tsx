import { Button, Item, Label, Segment } from "semantic-ui-react";
import { useState } from "react";
import { useStore } from "../../stores/store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const ActivityList = () => {
  const { activityStore } = useStore();
  const { activitiesByDate, deleteActivity, loading } = activityStore;
  const [target, setTarget] = useState("");

  return (
    <Segment>
      <Item.Group divided>
        {activitiesByDate.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  as={Link}
                  to={`/activities/${activity.id}`}
                  name={activity.id}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Button
                  loading={loading && target === activity.id}
                  floated="right"
                  content="Delete"
                  color="red"
                  onClick={() => {
                    setTarget(activity.id);
                    deleteActivity(activity.id);
                  }}
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default observer(ActivityList);
