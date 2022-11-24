import Footer from "./Footer";
import Middle from "./Middle";
import Navbar from "./Navbar";
import Right from "./Right";
import Left from "./Left";

function Main()
{
    return (
        <div>
            <div className="row">

            <div className="col-md-12 col-12" style={{height:"58px"}}><Navbar/></div>     
            <div className="col-md-3 col-12" style={{height:"auto" }}><Left/></div>
            <div className="col-md-6 col-12" style={{height:"auto" }}><Middle/></div>  
            <div className="col-md-3 col-12" style={{height:"auto"}}><Right/></div>     
            
            </div>

            <div className="row">

             <div className="col-md-12 col-12" style={{ border: "1px solid black", height:180 }}><Footer/></div>     
            
            </div>
        </div>
    );
}

export default Main;