import "./Image.css"

const Image= (props) => {
    return ( 
        <div className="text-center">
       <img src={props.image} className="round" alt="event" ></img>
       </div>
               
     );
}
 
export default Image;
