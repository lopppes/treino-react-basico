function Button(props){
    return(
        <button onClick={() => click(props.label)}>
            {props.label}
        </button>
    )

}
function click(label){
   alert(`A label desse botão é ${label}`)
}
export default Button;