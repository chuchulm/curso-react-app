import React from React



function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="cabecera">
            <Link to="/">RAIZ</Link>
            <Link to="/inicio">inicio</Link>
            <Link to="/bandanas">Bandanas</Link>
          </div>
          <div className="menu">
            <Route exact path="/">
             INICIO   
            </Route>
            <Route exact path="/inicio">
              <div>asdadsas</div>
            </Route>
            <Route path="/bandanas">
              LIsta de bandanas
            </Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
  
  export default App;