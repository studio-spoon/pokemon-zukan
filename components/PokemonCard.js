import { useState } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import ZeroPadding from './ZeroPadding'

export default function PokemonCard({ pokemon }) {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <>
      <Link href={`/${ZeroPadding(pokemon.id)}`} passHref>
        <LinkContents loaded={isLoaded}>
          <LinkContentsInner loaded={isLoaded}>
            <NameWrapper>
              <NameEnglish>{pokemon.name.english}</NameEnglish>
              <NameJapanese>{pokemon.name.japanese}</NameJapanese>
            </NameWrapper>
            <Image
              src={`/images/${ZeroPadding(pokemon.id)}.png`}
              alt={pokemon.name.japanese}
              onLoad={() => setIsLoaded(true)}
              width={400}
              height={400}
              loading='lazy'
            />
          </LinkContentsInner>
        </LinkContents>
      </Link>
      <ListNumber>No.{`${ZeroPadding(pokemon.id)}`}</ListNumber>
    </>
  )
}

const LinkContents = styled.a`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: pointer;
  transition: all ease-out 0.5s;
  will-change: background, transform, box-shadow;
  background: ${({ loaded }) =>
    loaded
      ? '#fff'
      : '#eee url(/images/pokemon_ball.gif) center / 100px no-repeat'};
  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  }
`

const LinkContentsInner = styled.div`
  transition: all ease-out 0.5s;
  will-change: opacity, transform;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transform: ${({ loaded }) => (loaded ? 'scale(1)' : 'scale(0.5)')};
`
const NameWrapper = styled.div``
const NameJapanese = styled.div`
  text-align: center;
  font-size: 1.1vw;
`
const NameEnglish = styled.div`
  font-family: mr-eaves-modern, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.6vw;
  text-transform: uppercase;
  text-align: center;
`
const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`

const ListNumber = styled.p`
  font-size: 14px;
  text-align: center;
  margin-top: 15px;
`