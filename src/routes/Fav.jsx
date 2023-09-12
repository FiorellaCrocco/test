import React, { useContext } from "react";
import { GlobalContext } from "../components/utils/GlobalContext";

const Fav = () => {
  const { value } = useContext(GlobalContext);

  const datos = JSON.parse(localStorage.getItem("favoritos"));

  return (
    <main className={value.theme === "light" ? "" : "dark"}>
      <div className="card-grid">
        {datos.map((item) => (
          <div key={item.id}>
            <div className="card">
              <h2>{item.name}</h2>
              <p>{item.username}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Fav;
