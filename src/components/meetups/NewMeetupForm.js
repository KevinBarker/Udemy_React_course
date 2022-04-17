import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
const NewMeetUpForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("test");
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image Link</label>
          <input type="url" id="image"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" id="address"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            type="textArea"
            rows={5}
            required
            id="description"
          ></textarea>
        </div>
        <div className={classes.action}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};
export default NewMeetUpForm;
