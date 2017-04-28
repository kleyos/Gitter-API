import React from 'react';
import Faye from 'faye';

const client = new Faye.Client('https://api.gitter.im/',{timeout: 60, retry: 5, interval: 1});

console.log(client)

const token = 'a39d1e6785d4b4ae9ad1debd7a96301e15f72652';

const subscription = client.subscribe( `/v1/rooms/57542d5ac43b8c601977be9a/chatMessages?access_token=${token}`, 
										(msg) => console.log(msg) );

export default client;

