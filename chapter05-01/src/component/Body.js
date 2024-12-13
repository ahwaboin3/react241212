// src/component/Body.js
function Body(props){
    console.log(props)
    return (
        <div>
            <h1>Body</h1>
            <h2>My name is {props.name}</h2>
            <h2>My name is {props["name"]}</h2>
            <h2>My age is {props.age}</h2>
        </div>
    )
}
export default Body;