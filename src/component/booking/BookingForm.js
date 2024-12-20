import React from "react";

const BookingForm = (props) => {
  const [date, setDate] = React.useState("");
  const [times, setTimes] = React.useState("");
  const [guests, setGuests] = React.useState("");
  const [occasion, setOccasion] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  };
  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };
  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            {/* Book Date */}
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
              />
            </div>

            {/* Time */}
            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select id="book-time" value={times} onChange={setTimes}>
                <option value="">Select a Time</option>
                {
                props.availableTimes.availableTimes.map((availableTimes) => {return <option
                  key={availableTimes}>{availableTimes}</option>})
                }
              </select>
            </div>

            {/* Number of guests */}
            <div>
              <label htmlFor="book-guests">Number of Guests</label>
              <input
                id="book-guests"
                value={guests}
                min="1"
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>

            {/* Ocation */}
            <div>
              <label htmlFor="book-occasion">Occasion</label>
              <select
                key={occasion}
                id="book-occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>

            {/* Submit */}
            <div className="btnReceive">
                <input aria-label="On Click" type="submit" value="Reserve Table" />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};
export default BookingForm;
