import type { RadiationServiceHandler } from '../../../../src/generated/server/threatatlas/radiation/v1/service_server';

import { listRadiationObservations } from './list-radiation-observations';

export const radiationHandler: RadiationServiceHandler = {
  listRadiationObservations,
};
