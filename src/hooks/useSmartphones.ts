import { useState } from 'react'
import { useFetch } from '../hooks'
import { ISmartphone } from '../interfaces'

function paramsToString(storage?: string, manufacturer?: string) {
  let params = {}

  return storage
    ? (params = { ...params, storage })
    : manufacturer
    ? (params = { ...params, manufacturer })
    : params
}

export const useSmartphones = () => {
  //

  const [storage, setStorage] = useState<string>()
  const [manufacturer, setManufacturer] = useState<string>()

  const storageParam = new URLSearchParams(
    paramsToString(storage, manufacturer),
  )

  const { response } = useFetch<ISmartphone[]>(
    `http://localhost:3333/smartphones?${storageParam}`,
  )

  return {
    smartphones: response,
    setManufacturer,
    setStorage,
  }
}
