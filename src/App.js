import React from 'react'

export default class App extends React.Component {

  state = {
    peopleInSpace: []
  }

  displayPeople() {
    return this.state.peopleInSpace.map(p => <p>{p.name}</p>)
  }

  render() {
    return (
      <div>
        <h1>People in Space</h1>
        <ul>
          {this.displayPeople()}
        </ul>
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(data => {
      this.setState({
        peopleInSpace: data.people
      })
    })
  }
}