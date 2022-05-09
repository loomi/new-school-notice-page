export const POLICIES = {
  'income:delete': () => {
    return true;
  },
};

export type PoliciesTypes = keyof typeof POLICIES;
