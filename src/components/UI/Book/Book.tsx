import React, { useState } from "react";
import "../../../styles/sass/form.scss";
const Book = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  return (
    <section className="section-form">
      <form className="form">
        <div className="form__container">
          <div className="form__input">
            <label>Destination</label>
            <div
              className="form__input--select"
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              {value}
            </div>
            <div
              className={
                open ? "form__input--value open" : "form__input--value"
              }
            >
              <div
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                  setValue(e.target.textContent);
                }}
              >
                MEKKAH
              </div>
              <div
                onClick={(e) => {
                  setValue(e.target.textContent);
                }}
              >
                MEDDINAH
              </div>
              <div
                onClick={(e) => {
                  setValue(e.target.textContent);
                }}
              >
                BAITU-HAROM
              </div>
            </div>
          </div>
          <div className="form__input">
            <label>Check in</label>
            <input type="date" />
          </div>
          <div className="form__input">
            <label>Adults</label>
            <input type="text" placeholder="No of Adults" />
          </div>
          <div className="form__input">
            <label>Children</label>
            <input type="text" placeholder="No of Children" />
          </div>
        </div>
        <div className="form__btn">
          <button type="submit" className="form__btn--submit">
            <span>Book Now</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Book;
