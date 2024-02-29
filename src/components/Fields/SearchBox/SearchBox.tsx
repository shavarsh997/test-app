import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

import { ContentBox, InputStyle } from './styled'

interface SelectorProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  count?: number
}

export const SearchBox: FC<SelectorProps> = ({ count, ...props }) => {
  return (
    <ContentBox>
      <InputStyle type="text" {...props} />
      {count !== undefined && <p>Found jokes: {count}</p>}
    </ContentBox>
  )
}
