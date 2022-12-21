const MultiColor = (WrappedComponents) => {

    const rainbow = ['red', 'blue', 'pink', 'yellow'];
    const randormColor = rainbow[Math.floor(Math.random() * 3)]
    const className = randormColor + '-text';

    return (props) => {
        return ( 
            <div className={className}> 
                <WrappedComponents {...props} />
            </div>
         );
   }
}
 
export default MultiColor;