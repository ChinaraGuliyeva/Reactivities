import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
  Button,
} from "semantic-ui-react";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

const ActivityDetails = () => {

  const {activityStore} = useStore();
  const {selectedActivity: activity, openForm, cancelSelectedActivity } = activityStore;

  if(!activity) return;

  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <CardContent>
        <CardHeader>{activity.title}</CardHeader>
        <CardMeta>
          <span>{activity.date}</span>
        </CardMeta>
        <CardDescription>{activity.description}</CardDescription>
      </CardContent>
      <CardContent extra>
        <Button.Group widths="2">
          <Button basic color="blue" content="Edit" onClick={()=> openForm(activity.id)}/>
          <Button basic color="grey" content="Cancel" onClick={cancelSelectedActivity}/>
        </Button.Group>
      </CardContent>
    </Card>
  );
};

export default observer(ActivityDetails);
