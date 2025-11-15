import type { JSX } from "react";
import style from "./DishesList.module.css";
import DishEditForm from "./DishEditForm";
import { useDispatch, useSelector } from "react-redux";
import type { DishId } from "./types/Dish";
import selectDishes from "./selectors";

export default function DishesList(): JSX.Element {
  const dishes = useSelector(selectDishes);
  const dispatch = useDispatch();
  const handleDelete = (id: DishId): void => {
    dispatch({ type: "dishes/delete", payload: id });
  };
  return (
   <div
      className={`mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl  ${style.container}`}
    >
      
        <ul className={style.list}>
          {dishes.map((dish) => (
            <li key={dish.id} className={style.dishCard}>
              <div className="md:flex flex-row">
              <div className={`:shrink-0 ${style.img}`}>
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src={dish.image}
                  alt={dish.title}
                />
              </div>
              <div className={`p-8 ${style.inf}`}>
              <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              <h3 className={style.heading}>{dish.title} </h3></div>
              <p className={style.category}>{dish.category}</p>
              <p className={style.price}>{dish.price} $ </p>
              <div className={""}>
                {" "}
                <button
                  type="button"
                  onClick={() => handleDelete(dish.id)}
                  className={style.btn4}
                >
                  Delete dish
                </button>
                <DishEditForm dish={dish} />{" "}
              </div></div></div>
            </li>
          ))}
        </ul>
      </div>
  

    
  );
}
