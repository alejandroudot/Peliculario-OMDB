import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import UserFavs from "../components/UserFavs";
import SearchUsers from "../components/SearchUsers";

//ESTA LA BARRA DE BUSQUEDA

const FindUser = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div>
          <div>LOGO</div>
          <div>
            <div>
              <SearchUsers />
            </div>
            <Route path="/userFavs" render={() => <UserFavs />} />
          </div>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default FindUser;
