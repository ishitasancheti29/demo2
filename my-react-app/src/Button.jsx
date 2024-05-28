function Button(){

    const handleClick = () => console.log("Ouch!");
    const handleClick2 = (name) => console.log('${name} Ishita stop clicking me ! ');
    return (
        <button onClick= {() => handleClick2("Ishita")}>Click Me!</button>
    );
}
export default Button