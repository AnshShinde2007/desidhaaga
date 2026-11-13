const metrics = [
  { value: "100s", label: "Spun Yarn Count" },
  { value: "14", label: "Village Guilds" },
  { value: "0%", label: "Synthetic Blends" },
  { value: "240g", label: "Featherweight Drape" },
];

export default function MetricsStrip() {
  return (
    <section className="w-full bg-surface-container-low py-space-lg">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center divide-y md:divide-y-0">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="py-space-sm flex flex-col items-center"
            >
              <span className="font-headline-md text-headline-md text-primary font-normal">
                {metric.value}
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mt-1">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
