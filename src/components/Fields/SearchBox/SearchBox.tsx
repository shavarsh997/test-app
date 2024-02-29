import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

import { ContentBox, InputStyle } from './styled'

interface SelectorProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const SearchBox: FC<SelectorProps> = ({ ...props }) => {
  return (
    <ContentBox>
      <InputStyle type="text" {...props} />
    </ContentBox>
  )
}
