import React from 'react'
import { Select } from 'semantic-ui-react'

const numbOptions = [
  { key: 'a', value: 'af', text: '1' },
  { key: 'b', value: 'ax', text: '2' },
  { key: 'c', value: 'al', text: '3' },
  { key: 'd', value: 'dz', text: '4' },
  { key: 'e', value: 'as', text: '5' },
  { key: 'f', value: 'ad', text: '6' },
  { key: 'g', value: 'ao', text: '7' },
  { key: 'h', value: 'ai', text: '8' },
  { key: 'i', value: 'ag', text: '9' },
  { key: 'j', value: 'ar', text: '10' },
  { key: 'k', value: 'ar', text: '>10' }
]

const SelectExample = () => (
  <Select
    className="nodisp"
    placeholder="Nombre de places"
    options={numbOptions}
  />
)

export default SelectExample
