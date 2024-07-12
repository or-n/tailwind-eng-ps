import { toUint8Array } from 'js-base64'

import { SignDoc, AuthInfo, Fee } from 'cosmjs-types/cosmos/tx/v1beta1/tx'
import { Coin } from 'cosmjs-types/cosmos/base/v1beta1/coin'
import { StdSignDoc as AminoSignDoc } from "@cosmjs/amino"
import {} from "@cosmjs/proto-signing"

export type SignDocParser = {
    get_fee(): Coin[]
    get_gas(): number
    get_chain_id(): string
}

class AminoSignDocParser implements SignDocParser {
  private doc: AminoSignDoc

  constructor(doc: string) {
    this.doc = JSON.parse(doc)
  }

  get_fee(): Coin[] {
    return this.doc.fee.amount.map(coin => coin)
  }

  get_gas(): number {
    return parseInt(this.doc.fee.gas)
  }

  get_chain_id(): string {
    return this.doc.chain_id
  }
}

export class DirectSignDocParser implements SignDocParser {
  private doc: SignDoc
  private fee: Fee

  constructor(doc: string) {
    const u8array = toUint8Array(doc)
    this.doc = SignDoc.decode(u8array)
    this.fee = AuthInfo.decode(this.doc.authInfoBytes).fee!
  }

  get_fee(): Coin[] {
    return this.fee.amount
  }

  get_gas(): number {
    return parseInt(this.fee.gasLimit.toString())
  }

  get_chain_id(): string {
    return this.doc.chainId
  }
}