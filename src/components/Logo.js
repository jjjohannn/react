import { Component } from "react"
const styles={
    Logo:{
        fontWeight:'700',
        fontSize: '2rem',
    }
}

class Logo extends Component{
    render(){
        return(
            <div style={styles.Logo}>
                Shop
            </div>
        )

    }
}
export default Logo