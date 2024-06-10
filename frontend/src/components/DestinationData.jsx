import "./Destination.css"
import {Component} from 'react'
import "./Destination.css";


class DesinationData extends Component{
    render(){
        return(
            <div className="first-des">
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>
           {this.props.text}
          </p>
        </div>
        <div className="image">
          <img src={this.props.img1} alt="img1" />
          <img src={this.props.img2} alt="img2" />
        </div>
      </div>
        )
    }
}


export default DesinationData