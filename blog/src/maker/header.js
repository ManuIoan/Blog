/** @format */
import { BrowserRouter,Link } from 'react-router-dom';

function header() {
  return (
    <div className="nav22">

        
      <ul>
      <li class="f1">
        <BrowserRouter>
        <Link to="/mars.html">Acasa</Link>
      </BrowserRouter>
        </li>
        <li>
         <BrowserRouter>
        <Link to="/">Portofolio</Link>
      </BrowserRouter>
        </li>
        <li>
        <BrowserRouter>
        <Link to="/">About</Link>
      </BrowserRouter>
        </li>
      </ul>
      
    </div>
  );
}

export default header;
