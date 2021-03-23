import React, { Component } from 'react';
import {Button, Dropdown} from 'react-bootstrap';
import AddToCalendar from 'react-add-to-calendar';
let items = [
    { google: 'Google' }
 ];
class About extends React.Component {
    static displayName = 'Example';
    state = {
        event: {
        title: 'Sample Event 2',
        description: 'This is the sample event provided as an example only',
        location: 'Portland, OR',
        startTime: '2016-09-16T20:15:00-04:00',
        endTime: '2016-09-16T21:45:00-04:00'
    }
};

render() {
      return(
        <AddToCalendar 
        event={this.state.event}
        // buttonTemplate={icon}
        listItems={items}
        displayItemIcons = {false} //not work
      //   useFontAwesomeIcons={false} //not work
      //   optionsOpen = {true} //work
        />
      )
    };
  }
  export default About;