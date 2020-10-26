import React from "react";
import { Navigation } from "./components/navigation";
import { Route, Switch } from "react-router-dom";
import { Home } from "./routes/home";
import { Skills } from "./routes/skills";
import { Project } from "./routes/project";
import { Profile } from "./routes/profile";
import { BadRequest } from "./routes/badRequest";
import { Footer } from "./components/footer";

function App() {
    return (
        <div>
            <Navigation />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/skills" component={Skills} />
                <Route path="/project" component={Project} />
                <Route path="/profile" component={Profile} />
                <Route component={BadRequest} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
