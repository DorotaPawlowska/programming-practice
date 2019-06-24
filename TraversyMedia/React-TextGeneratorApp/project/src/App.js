import React from 'react';
import './App.css';
import Output from './components/Output';
import Select from './components/controls/Select';
import Text from './components/controls/Text';
import axios from 'axios';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      paras: 4,
      html: 'true',
      text: ''
    };
  }

  componentWillMount(){
    this.getSampleText();
  }

  getSampleText(){
    const cors = 'cors-anywhere.herokuapp.com'; 
    axios.get('https://'+ cors +'/hipsterjesus.com/api/?paras='+this.state.paras+'&html='+this.state.html+'')
    .then((res) => {
      this.setState({text: res.data.text}, function(){
        console.log(this.state);
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  showHtml(x){
    this.setState({html: x}, this.getSampleText);
  }

  changeParas(number){
    this.setState({paras: number}, this.getSampleText);
  }

  render(){
      return (
    <div className="App container">
      <h1 className="text-center">ReactJS Sample Text Generator</h1>
      <hr />
      <form className="form-inline">
        
        <div className="form-group">
          <label>Paragraphs:</label>
          <Text value={this.state.paras} onChange={this.changeParas.bind(this)} />
        </div>

        <div className="form-group">
          <label>Include HTML:</label>
          <Select value={this.state.html} onChange={this.showHtml.bind(this)} />
        </div>

      </form>
      <br />
      <Output value={this.state.text} />
    </div>
  );
  }

}

export default App;
