import NewMeetUpForm from "../components/meetups/NewMeetupForm";
import {useHistory} from "react-router-dom";

const NewMeetUpPage = () => {
  const history = useHistory();
  const addMeetupHandler = (meetupData) => {
    fetch(
      //default fetch sends GET request first, we need to send POST
      "https://react-getting-started-5a0a5-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};
export default NewMeetUpPage;
