import { stats } from '../../data/site';
import { Counter } from '../ui/Counter';

export function Stats() {
  return (
    <section className="section stats" aria-label="آمار Webeko">
      <div className="container">
        <div className="stats-grid glass glass--edge">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="stat-value">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
