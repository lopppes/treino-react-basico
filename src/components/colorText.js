function ColorTextFunction(props){
    const {text, textColor} = props;

    const paragraphStyle = {
        color: textColor,
        textTransform: 'uppercase',

    }
    return(
        <p style={paragraphStyle}>
         {text}
        </p>
    )
}

export default ColorTextFunction;