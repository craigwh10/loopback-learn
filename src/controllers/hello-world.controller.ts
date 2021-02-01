import {get} from '@loopback/rest';

export class HelloWorldController {
  constructor() { }

  @get('/hello-world', {
    responses: {
      '200': {
        description: 'This is our new description',
        content: {
          'application/json': {
            schema: {
              type: 'string',
            }
          }
        }
      }
    }
  })
  async sayHello(): Promise<object> {
    return {hello: 'World'};
  }

}
