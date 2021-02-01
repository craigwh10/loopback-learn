import {Client, expect} from '@loopback/testlab';
import {LoopbackLearnApplication} from '../..';
import {setupApplication} from './test-helper';

describe('HelloWorldController', () => {
  let app: LoopbackLearnApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('invokes GET /hello-world', async () => {
    const res = await client.get('/hello-world').expect(200);
    expect(res.body).to.containEql({hello: 'World'});
  });
});
