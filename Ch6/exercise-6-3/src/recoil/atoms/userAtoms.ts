// src/recoil/atoms/userAtoms.ts
import { atom } from 'recoil'
import { initUser } from '../../model'

export const userState = atom({
  key: 'UserState',
  default: initUser(),
})
