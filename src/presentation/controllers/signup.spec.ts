import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provider', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'jeanmbiz@hotmail.com',
        password: 'jmb1987',
        passwordConfirmation: 'jmb1987'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missin param: name'))
  })

  test('Should return 400 if no email is provider', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'jean',
        password: 'jmb1987',
        passwordConfirmation: 'jmb1987'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missin param: email'))
  })
})