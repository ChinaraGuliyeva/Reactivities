import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../models/activity";
import { SyntheticEvent, useState } from "react";

interface ActivityListProps {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

const ActivityList = ({
  activities,
  selectActivity,
  deleteActivity,
  submitting,
}: ActivityListProps) => {

  const [target, setTarget] = useState("");

  const handleActivityDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  };

  return (
    <Segment>
      <Item.Group divided>
        {activities.map((activity) => (
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
                  name={activity.id}
                  floated="right"
                  content="View"
                  color="blue"
                  onClick={() => {
                    selectActivity(activity.id);
                  }}
                />
                <Button
                  loading={submitting && target === activity.id}
                  floated="right"
                  content="Delete"
                  color="red"
                  onClick={(event) => {
                    handleActivityDelete(event, activity.id);
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

export default ActivityList;
