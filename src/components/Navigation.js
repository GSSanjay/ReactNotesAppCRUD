import React from "react";
import ItemList from "./ItemList";
import {Switch, Route} from "react-router-dom"

const Navigation = () => {
    return(
        <>
            <Switch>
                {/* <Route exact path="/" component={App}/> */}
                {/* <Route exact path="/counter" component={Counter}/> */}
                <Route exact path="/itemlist" component={ItemList}/>
            </Switch>
        </>
    )
}

export default Navigation;