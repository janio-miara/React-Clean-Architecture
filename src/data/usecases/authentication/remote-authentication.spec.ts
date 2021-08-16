import { RemouteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../test/mock-http-client'

describe('RemouteAuthentication', () => {
  test('Should call HttoClient with correct URL', async () => {
    const url = ' any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemouteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
