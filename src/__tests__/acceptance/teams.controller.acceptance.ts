import {Client} from '@loopback/testlab';
import {LoopbackLearnApplication} from '../..';
import {setupApplication} from './test-helper';

describe('TeamsController', () => {
  let app: LoopbackLearnApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('invokes GET /teams', async () => {
    await client.get('/teams').expect(200);
  });

});
