import { Container } from '../../../containers/Container/Container'
import { Section } from '../../../containers/Section/Section'
import { DetailsSkeleton } from '../parts/DetailsSkeleton'
import { HeroSkeleton } from '../parts/HeroSkeleton'

export const MediaPageSkeleton = () => {
  return (
    <>
      <HeroSkeleton />
      <Container>
        <Section>
          <DetailsSkeleton />
        </Section>
        <Section className='min-h-[490px]' title='Cast' />
        <Section className='min-h-[540px]' title='Recommended' />
      </Container>
    </>
  )
}
