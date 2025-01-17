import type { ReactNode } from "react";
import { Card } from "./card";
export function StatisticsCard({
  title,
  subtitle,
  iconComponent,
  className = "bg-slate-900",
}: {
  title: number | string | ReactNode;
  subtitle: string;
  iconComponent: ReactNode;
  className: string;
}) {
  return (
    <Card
      className={`grow-1 flex shrink-0 basis-64 items-center justify-between rounded-lg bg-[url('/images/dashboardStatisticsBackground.svg')] bg-cover bg-bottom bg-no-repeat px-7 py-10 ${className} text-white`}
    >
      <div>
        <h3 className="text-5xl font-extrabold leading-9 mb-4">{title}</h3>
        <p className="font-semibold text-xl">{subtitle}</p>
      </div>
      {iconComponent}
    </Card>
  );
}
