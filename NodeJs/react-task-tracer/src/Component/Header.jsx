import './Header.css';
import Button from "./Button/Button"
const Header = ({ title }) => { //if there is single value then you do not need to write props you can write like this and this should be same for App.js
    const onClick1=(e)=>{
        console.log("click",e);
    };
    return (
        <div>
            <header> <h1 style={headingStyle}>Hello{title}</h1>
            <h2 className="h2Head">H2 heading</h2>
            <h3 id="h3Head">H3 Heading</h3>
            <button className="btn">Add</button>
            <Button text="Hello1" color="green" onClick={onClick1}/>
            </header>
        </div>

    );

};
const headingStyle = {
    color: "darkcyan",
    backgroundColor: "lightblue",
    textAlign: "center",
};

Header.defaultProps = {
    title: "Task Tracer"
};
       
export default Header;
//reusibility of this code