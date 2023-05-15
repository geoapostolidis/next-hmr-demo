import { memo } from "react"
import { Row } from "antd"
import styled from 'styled-components';

const HeaderContainer = styled(Row)`
  height: 100%;
  line-height: 100%;

  /* small screens */
  @media screen and (max-width: 576px) {
    height: auto;
    padding-top: 24px;
    padding-inline: 16px;
  }
`

const HeaderContent = () => {

  return (
    <HeaderContainer gutter={[0,16]}>
    </HeaderContainer>
  )
}

export default memo(HeaderContent)
