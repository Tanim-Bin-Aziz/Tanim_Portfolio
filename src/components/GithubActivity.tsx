import { contribColor } from "@/lib/contributions";
import { getContributionData } from "@/lib/github";
import { githubSnapshot } from "@/data/github";
import { IconActivity } from "@/components/icons";

/**
 * Server Component — real GitHub contribution data fetch kore,
 * network fail korle committed snapshot use kore.
 */
export default async function GithubActivity() {
  const { weeks, monthLabels, total } = await getContributionData();
  const { profile } = githubSnapshot;

  const columnCount = weeks.length;
  const columnWidth = `(100% - ${columnCount - 1} * var(--contrib-gap)) / ${columnCount}`;

  return (
    <section id="activity" className="section scroll-mt-24">
      <div className="section-head">
        <p className="section-label"><IconActivity />GitHub Activity</p>
        <a
          href={profile.github}
          className="section-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          @{profile.login}
        </a>
      </div>

      <div className="contrib-wrap">
        {/* Month labels — week index onujayi exact position e boshano */}
        <div className="contrib-months">
          {monthLabels.map((m) => (
            <span
              key={`${m.label}-${m.weekIndex}`}
              className="contrib-month"
              style={{
                left: `calc(${m.weekIndex} * (${columnWidth} + var(--contrib-gap)))`,
              }}
            >
              {m.label}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div
          className="contrib-grid"
          style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
        >
          {weeks.flat().map((day) => (
            <div
              key={day.date}
              className="contrib-cell"
              style={{ background: contribColor(day.level) }}
              title={`${day.count} contributions on ${day.date}`}
            />
          ))}
        </div>

        <div className="contrib-footer">
          <span>{total.toLocaleString("en-US")} contributions in the last year</span>

          <div className="contrib-legend">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <span
                key={level}
                className="contrib-legend-cell"
                style={{ background: contribColor(level) }}
              />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
