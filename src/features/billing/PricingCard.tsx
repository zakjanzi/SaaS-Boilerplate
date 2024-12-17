import { useTranslations } from 'next-intl';
import React from 'react';

export const PricingCard = (props: {
  planId: string;
  price: number;
  // interval: BillingInterval;
  button: React.ReactNode;
  children: React.ReactNode;
  nameKey: string;
  descriptionKey: string;
}) => {
  const t = useTranslations('PricingPlan');

  return (
    <div className="rounded-xl border border-border px-6 py-8 text-center">
      <div className="text-lg font-semibold">
        {t(props.nameKey)}
      </div>

      <div className="mt-3 flex items-center justify-center">
        <div className="text-5xl font-bold">
          $
          {props.price}
        </div>

        {/* <div className="ml-1 text-muted-foreground">
          {`/ ${t(`plan_interval_${props.interval}`)}`}
        </div> */}
      </div>

      <div className="mt-2 text-sm text-muted-foreground">
        {t(props.descriptionKey)}
      </div>

      {props.button}

      <ul className="mt-8 space-y-3">{props.children}</ul>
    </div>
  );
};
