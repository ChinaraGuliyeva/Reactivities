import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../models/activity";
import { ChangeEvent, useState } from "react";

interface ActivityFormProps {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
}

const ActivityForm = ({activity: selectedActivity, closeForm, createOrEdit}: ActivityFormProps) => {

  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    date: "",
    description: "",
    category: "",
    city: "",
    venue: "",
  };

  const [activityData, setActivityData] = useState(initialState);

  const handleSubmit = () => {
    createOrEdit(activityData);
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setActivityData({...activityData, [name]: value});
  }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Input placeholder="Title" value={activityData.title} name='title' onChange={handleInputChange}/>
        <Form.TextArea placeholder="Description" value={activityData.description} name='description' onChange={handleInputChange}/>
        <Form.Input placeholder="Category" value={activityData.category} name='category' onChange={handleInputChange}/>
        <Form.Input type="date" placeholder="Date" value={activityData.date} name='date' onChange={handleInputChange}/>
        <Form.Input placeholder="City" value={activityData.city} name='city' onChange={handleInputChange}/>
        <Form.Input placeholder="Venue" value={activityData.venue} name='venue' onChange={handleInputChange}/>
        <Button floated="right" positive type="submit" content="Submit" />
        <Button floated="right" type="button" content="Cancel" onClick={closeForm}/>
      </Form>
    </Segment>
  );
};

export default ActivityForm;
