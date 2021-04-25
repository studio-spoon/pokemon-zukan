import styled from '@emotion/styled'
import Link from 'next/link'

export default function Back() {
  return (
    <Wrapper>
      <Link href='/'>
        <a>
          <Heading>Back to Index</Heading>
        </a>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #fff;
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 10;
`
const Heading = styled.h1`
  font-size: 50px;
`