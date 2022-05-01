import { Container } from '../../../containers/Container/Container'
import { Section } from '../../../containers/Section/Section'
import { HeroSkeleton } from '../parts/HeroSkeleton'

export const HomePageSkeleton = () => {
  return (
    <>
      <HeroSkeleton />
      <Container>
        <Section className='min-h-[540px]' title='Trending movies' />
        <Section className='min-h-[540px]' title='Trending TV' />
      </Container>
    </>
  )
}
