import { AboutHero } from '../../components/AboutHero'
import { ExperienceTimeline } from '../../components/ExperienceTimeline'
import { EXPERIENCE } from '../../data/experience'

export default function AboutPage() {
  return (
    <div className="grid gap-10">
      <AboutHero />
      <ExperienceTimeline items={EXPERIENCE} />
    </div>
  )
}
