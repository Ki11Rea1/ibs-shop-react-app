import { NavLink } from "react-router-dom";
import { API_URL } from "../../../../API/constants";
import "./Item.css";

const Item = (props) => {
  return (
    <NavLink to={"/item/" + props.item.id} className="item">
      <div className="item__favorite">
        {props.item.like ? (
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z"
              fill="#E97F03"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z"
              fill="#959595"
            />
          </svg>
        )}
      </div>
      <div className="item__info">
        <div className="item__photo">
          <img
            src={API_URL + props.item.picture.path}
            alt={props.item.picture.alt}
          />
        </div>
        <p className="item__name">{props.item.name}</p>
        <p className="item__price">
          {props.item.price.value + " " + props.item.price.currency}
        </p>
      </div>
    </NavLink>
  );
};

export default Item;
