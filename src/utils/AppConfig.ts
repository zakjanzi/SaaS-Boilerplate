import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types';

import type { PricingPlan } from '@/types/Subscription';

const localePrefix: LocalePrefix = 'as-needed';

export const AppConfig = {
  name: '961 Automation Agency',
  locales: [
    {
      id: 'en',
      name: 'English',
    },
    { id: 'fr', name: 'Français' },
  ],
  defaultLocale: 'en',
  localePrefix,
};

export const AllLocales = AppConfig.locales.map(locale => locale.id);

export const PLAN_ID = {
  FREE: 'free',
  PREMIUM: 'premium',
  ENTERPRISE: 'enterprise',
} as const;

export const PricingPlanList: Record<string, PricingPlan> = {
  [PLAN_ID.FREE]: {
    id: PLAN_ID.FREE,
    nameKey: 'free_plan_name',
    descriptionKey: 'free_plan_description',
    price: 0,
    // interval: 'month',
    itemsKeys: ['free_plan_item-1', 'free_plan_item-2'], // Map these keys
    testPriceId: 'test_free',
    devPriceId: 'dev_free',
    prodPriceId: 'prod_free',
    // features: {
    //   teamMember: 2,
    //   website: 2,
    //   storage: 2,
    //   transfer: 2,
    // },
  },
  [PLAN_ID.PREMIUM]: {
    id: PLAN_ID.PREMIUM,
    nameKey: 'premium_plan_name',
    descriptionKey: 'premium_plan_description',
    price: 649,
    // interval: 'month',
    itemsKeys: [
      'premium_plan_item-1',
      'premium_plan_item-2',
      'premium_plan_item-3',
      'premium_plan_item-4',
    ], // Map these keys
    testPriceId: 'test_premium',
    devPriceId: 'dev_premium',
    prodPriceId: 'prod_premium',
    // features: {
    //   teamMember: 5,
    //   website: 5,
    //   storage: 10,
    //   transfer: 10,
    // },
  },
  [PLAN_ID.ENTERPRISE]: {
    id: PLAN_ID.ENTERPRISE,
    nameKey: 'enterprise_plan_name',
    descriptionKey: 'enterprise_plan_description',
    price: 749,
    // interval: 'month',
    itemsKeys: [
      'enterprise_plan_item-1',
      'enterprise_plan_item-2',
      'enterprise_plan_item-3',
      'enterprise_plan_item-4',
    ], // Map these keys
    testPriceId: 'test_enterprise',
    devPriceId: 'dev_enterprise',
    prodPriceId: 'prod_enterprise',
    // features: {
    //   teamMember: 10,
    //   website: 10,
    //   storage: 20,
    //   transfer: 20,
    // },
  },
};
