import React from 'react';
import FirstPage from './FirstPage/FirstPage';
import TopHead from './Nav/TopHead';
import Games from '././Games/Games';
import Cart from "./Games/pages/cart/Cart";
import Store from "./Games/pages/store";
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom";
import Categories from './FirstPage/Categories';
import Farcry from './Games/DetailsGames/Farcry';
import Humankind from './Games/DetailsGames/Humankind';
import Fifa from './Games/DetailsGames/Fifa';
import Gta from './Games/DetailsGames/Gta';
import Wrc from './Games/DetailsGames/WrcTen';
import Resident from './Games/DetailsGames/Resident';
import MassEffectLegendary from './Games/DetailsGames/MassEffectLegendary';
import AssassinsCreedValhalla from './Games/DetailsGames/AssassinsCreedValhalla';
import AnthemOrigin from "./Games/DetailsGames/AnthemOrigin";
import HouseofAshes from './Games/DetailsGames/HouseofAshes';
import RedDead from './Games/DetailsGames/RedDead';
import DaysGone from './Games/DetailsGames/DaysGone';
import MonsterHunterWorld from "./Games/DetailsGames/MonsterHunterWorld";
import MonsterHunterStoriesTwo from './Games/DetailsGames/MonsterHunterStoriesTwo';
import WrcTen from './Games/DetailsGames/WrcTen';
import CallofDutyBlack from './Games/DetailsGames/CallofDutyBlack';
import WatchDogsLegion from './Games/DetailsGames/WatchDogsLegion';
import Back4Blood from "./Games/DetailsGames/Back4Blood";
import Warzone from "./Games/DetailsGames/Warzone";
import CyberPunk from "./Games/DetailsGames/CyberPunk";
import DeathLoop from "./Games/DetailsGames/DeathLoop";
import Category from "./Categories/Category";

const App = () => {
    document.body.style.backgroundColor = "#161c2d";
    return (
        <React.Fragment>
            <BrowserRouter>
                <Router>
                    <TopHead/>
                    <Switch>
                        <Route path="/" exact
                            component={FirstPage}/>
                        <Route path="/games" exact
                            component={Games}/>
                        <Route path="/store"
                            component={Store}/>
                        <Route path="/cart"
                            component={Cart}/>
                        <Route path="/categories"
                            component={Categories}/>
                        <Route path="/farcry"
                            component={Farcry}/>
                        <Route path="/humankind"
                            component={Humankind}/>
                        <Route path="/fifa"
                            component={Fifa}/>
                        <Route path="/gta"
                            component={Gta}/>
                        <Route path="/wrc"
                            component={Wrc}/>
                        <Route path="/resident"
                            component={Resident}/>
                        <Route path="/MassEffectLegendary"
                            component={MassEffectLegendary}/>
                        <Route path="/assassinsCreedValhalla"
                            component={AssassinsCreedValhalla}/>
                        <Route path="/anthemOrigin"
                            component={AnthemOrigin}/>
                        <Route path="/houseofAshes"
                            component={HouseofAshes}/>
                        <Route path="/redDead"
                            component={RedDead}/>
                        <Route path="/daysGone"
                            component={DaysGone}/>
                        <Route path="/monsterHunterWorld"
                            component={MonsterHunterWorld}/>
                        <Route path="/monsterHunterStoriesTwo"
                            component={MonsterHunterStoriesTwo}/>
                        <Route path="/wrcTen"
                            component={WrcTen}/>
                        <Route path="/callofDutyBlack"
                            component={CallofDutyBlack}/>
                        <Route path="/watchDogsLegion"
                            component={WatchDogsLegion}/>
                        <Route path="/back4Blood"
                            component={Back4Blood}/>
                        <Route path="/warzone"
                            component={Warzone}/>
                        <Route path="/deathLoop"
                            component={DeathLoop}/>
                        <Route path="/cyberPunk"
                            component={CyberPunk}/>
                        <Route path="/category"
                            component={Category}/>

                    </Switch>
                </Router>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
