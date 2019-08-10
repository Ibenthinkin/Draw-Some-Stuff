import React, { Component} from 'react';
import './App.css';
import Canvas from './Canvas'

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      photo: null,
      id:''
    }
  }



  handleOnChange = (e) => {
      this.setState({
        id : e.target.value
      })
  }

  handleFile = (e) =>{
    this.setState({
      photo: e.target.files[0]
    })
  }




  handleSubmit = (event) =>{
    event.preventDefault()

    const data = new FormData()
    data.append('id', this.state.id)
    data.append('photo', this.state.photo)
    debugger

    fetch(`http://localhost:3000/api/v1/users/`,{
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'false',
        'Process Data': 'false'
      }
    }).then(
      (response) => console.log(response)
    )

  }


render () {
  return (
    <div className="App">
      <h1>Drawsomestuff</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Photo:
            <input type="file" name="photo" onChange={this.handleFile}/>
          </label>
          <label>
            Name:
            <input type="text" name="id " value={this.state.id} onChange={this.handleOnChange}/>
          </label>
          <button>Submit</button>
        </form>
      <Canvas />
    </div>
  );
}

}
