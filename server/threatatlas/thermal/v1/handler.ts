import type { ThermalServiceHandler } from '../../../../src/generated/server/threatatlas/thermal/v1/service_server';

import { listThermalEscalations } from './list-thermal-escalations';

export const thermalHandler: ThermalServiceHandler = {
  listThermalEscalations,
};
