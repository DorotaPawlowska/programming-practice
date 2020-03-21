const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const moment = require('moment');

// idea serivce
class IdeaService {
  constructor(){
    this.ideas = [];
  }

  async find(){
    return this.ideas;
  }

  async create(data){
    const idea = {
      id: this.ideas.length,
      text: data.text,
      tech: data.tech,
      viewer: data.viewer
    }
    idea.time = moment().format('h:mm:ss a');
    this.ideas.push(idea);

    return idea;
  }
}

const app = express(feathers());
//parse json
app.use(express.json());
// conf socketio realtime apis
app.configure(socketio());
// enable REST service
app.configure(express.rest());
// register services
app.use('/ideas', new IdeaService());
//new connections connect to stream channel
app.on('connection', conn => app.channel('stream').join(conn));
// published event to stream
app.publish(data => app.channel('stream'));

const PORT = process.env.PORT || 3030;
app.listen(PORT).on('listening', () => console.log(`Realtime server running on port ${PORT}`));

// app.service('ideas').create({
//   text: 'bild app',
//   tech: 'node js',
//   viewer: 'john doe',
//   time: moment().format('h:mm:ss a')
// });