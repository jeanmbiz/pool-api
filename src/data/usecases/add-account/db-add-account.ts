import { AddAccount, AddAccountModel, AddAccountRepository, Encrypter } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly addAccountRepository: AddAccountRepository

  constructor (encrypter: Encrypter, addAccountRepository: AddAccountRepository) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepository
  }

  async add (accountData: AddAccountModel): Promise<any> {
    const hashedPassowrd = await this.encrypter.encrypt(accountData.password)
    await this.addAccountRepository.add(Object.assign({}, accountData, { password: hashedPassowrd }))
    return new Promise(resolve => resolve(null))
  }
}