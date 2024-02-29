import { FC } from 'react'
import { StyledCard, StyledDate } from './styled'
import { JokesListType } from 'store/types'

const Card: FC<{ isMain?: boolean; data: JokesListType }> = ({
  isMain,
  data,
}) => {
  return (
    <StyledCard $isMain={isMain}>
      <p className="text">{data.value}</p>
      <StyledDate>
        <p>{data.id}</p>
        <p>{data.created_at}</p>
      </StyledDate>
    </StyledCard>
  )
}

export default Card
