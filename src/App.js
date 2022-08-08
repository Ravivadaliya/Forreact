import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

 function App() {
  return (
    <>
    <h1>Helo react this is a home pages for react application</h1>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      {/* Navbar end */}
    </>
  );
}

  function Body() {
   {/* body part start */}
   return(
   <>
   <form>
   <div class="form-group"></div>
   <div class="form-group">
     <label for="exampleFormControlSelect1">Example select</label>
     <select class="form-control" id="exampleFormControlSelect1">
       <option>1</option>
       <option>2</option>
       <option>3</option>
       <option>4</option>
       <option>5</option>
     </select>
   </div>
   <div class="form-group">
     <label for="exampleFormControlSelect2">Example multiple select</label>
     <select multiple class="form-control" id="exampleFormControlSelect2">
       <option>1</option>
       <option>2</option>
       <option>3</option>
       <option>4</option>
       <option>5</option>
     </select>
   </div>
   <div class="form-group">
     <label for="exampleFormControlTextarea1">Example textarea</label>
     <textarea
       class="form-control"
       id="exampleFormControlTextarea1"
       rows="3"
     ></textarea>
   </div>
 </form>
 </>
);
}
export default App;
export {Body};

