import { RemouteAuthentication } from './remote-authentication'
import { HttpPostClient } from '../../protocols/http/http-post-client'

describe('RemouteAuthentication', () => {
  test('Should call HttoClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;
      async post (url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }
    const url = ' any_url'
    const httpPostClient = new HttpPostClientSpy()
    const sut = new RemouteAuthentication(url, httpPostClient)
    await sut.auth()
    expect(httpPostClient.url).toBe(url)
  })
})
