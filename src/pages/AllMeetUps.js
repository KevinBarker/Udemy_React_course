import Meetuplist from "../components/meetups/MeetupList";
import {useState, useEffect} from "react";

const AllMeetUpsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  /*  use effect can specifiy WHEN to execute a function
      in this case we have an infinite loop since state is updated on promise return
      and once state is updated the api call will run again, updated state again.

      useEffect lets us specify WHEN to run a function, it will only run AGAIN is the 2nd argument value has changed.
      rule of thumb is to include all external dependencies in this function there.   
  */
  useEffect(() => {
    fetch(
      //default fetch sends GET request first, we need to send POST
      "https://react-getting-started-5a0a5-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setLoadedMeetups(meetups);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>...loading</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meet Ups Page</h1>
      <Meetuplist meetups={loadedMeetups} />
    </section>
  );
};
export default AllMeetUpsPage;
