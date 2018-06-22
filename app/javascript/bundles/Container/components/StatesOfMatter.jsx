import PropTypes from 'prop-types';
import React from 'react';

export default class StatesOfMatter extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props) {
    super(props);

    // How to set initial state in ES6 className syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-className
    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
    <div>
      <div class="fond">
          <div id="forb"style="float:left;" class="style_prevu_kit">
          <a id="forb" class="active" href="index.html"/>   </div>
          <div id="button"style="float:left;" class="button-flip">
          <a id="button" class="active" href="#text"/> 
          <button style="color: #fff; margin-top: 50px;" type="button" class="btn" href="#text">More info</button>
      </div>
      <div id="forb" style="float:right;" class="style_prevu_kit">
          <a id="forb" class="active" href="index.html"/></div>
      </div>
      <div id="visual">
        <br />
        <div class = "buttons" >
          <button id="solid" onclick="changeState(500)">SOLID</button>
          <button  id="liquid" onclick="changeState(200)">LIQUID</button>
          <button  id="gas" onclick="changeState(50)">GAS</button>
        </div>
        <canvas  id="myCanvas" width="1000" height="1000" style="border:0px solid #000000;"/>
       {/*<style>
         canvas {
          padding-left: 0;
          padding-right: 0;
          margin-left: auto;
          margin-right: auto;
          display: block;
          width: 800px;
      }
    </style>
    <script type="text/javascript" src="./lesson1.js"></script>*/}

      </div>
      <div id="text" style = "color: white ; background-color : #39454A" >
        <h1 Characteristics Of Solids Liquids and Gases />

        <table border = "0" align="center" class="table">
        <tbody>
          <tr>
            <th scope="col"> Characteristic </th>
            <th scope="col"> Solids </th>
            <th scope="col"> Liquids </th>
            <th scope="col"> Gases </th>
          </tr>
          <tr>
            <th scope="row" style = " font-size : 25px" > Distance </th>
            <td> Particles are closely packed </td>
            <td> Particles are loosely packed </td>
            <td> Particles are very loosely packed </td>
          </tr>
          <tr>
            <th scope="row" style = " font-size : 25px"> Shape and Volume </th>
            <td> Very rigid, has fixed shape and volume </td>
            <td> No fixed shape , but has fixed volume </td>
            <td> No fixed shape or volume, assumes shape of the container </td>
          </tr>
          <tr>
            <th scope="row" style = " font-size : 25px"> Compressibility</th>
            <td> Incompressible </td>
            <td> Difficult to compress </td>
            <td> Easily Compressible </td>
          </tr>
          <tr>
            <th scope="row" style = " font-size : 25px"> Density </th>
            <td> High density </td>
            <td> Lower than solids but higher than liquids </td>
            <td> Least density </td>
          </tr>
          </tbody>
        </table>
      </div>
  </div>
    );
  }
}
