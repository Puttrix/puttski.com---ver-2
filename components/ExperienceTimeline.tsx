type Experience = {
  title: string
  company?: string
  start: string
  end?: string
  summary?: string
  tags?: string[]
}

export function ExperienceTimeline({ items }: { items: Experience[] }) {
  return (
    <section className="prose max-w-none">
      <h2>Experience</h2>
      <ul className="not-prose relative ml-0 border-s pl-6">
        {items.map((e, i) => (
          <li key={i} className="mb-6 marker:content-none relative">
            <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border bg-white dark:bg-black"></span>
            <div className="prose max-w-none">
              <h3 className="my-1">
                {e.title}
                {e.company ? <span className="opacity-80"> @ {e.company}</span> : null}
              </h3>
              <p className="m-0 text-sm opacity-75">
                {e.start} — {e.end ?? 'Present'}
              </p>
              {e.summary ? <p>{e.summary}</p> : null}
              {e.tags && e.tags.length ? (
                <p className="m-0 text-sm opacity-80">{e.tags.join(' • ')}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

