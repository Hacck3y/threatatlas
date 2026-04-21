/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as alertRules from "../alertRules.js";
import type * as apiKeys from "../apiKeys.js";
import type * as config_productCatalog from "../config/productCatalog.js";
import type * as constants from "../constants.js";
import type * as contactMessages from "../contactMessages.js";
import type * as crons from "../crons.js";
import type * as emailSuppressions from "../emailSuppressions.js";
import type * as entitlements from "../entitlements.js";
import type * as http from "../http.js";
import type * as lib_auth from "../lib/auth.js";
import type * as lib_dodo from "../lib/dodo.js";
import type * as lib_entitlements from "../lib/entitlements.js";
import type * as lib_env from "../lib/env.js";
import type * as lib_identitySigning from "../lib/identitySigning.js";
import type * as notificationChannels from "../notificationChannels.js";
import type * as payments_billing from "../payments/billing.js";
import type * as payments_cacheActions from "../payments/cacheActions.js";
import type * as payments_checkout from "../payments/checkout.js";
import type * as payments_seedProductPlans from "../payments/seedProductPlans.js";
import type * as payments_subscriptionEmails from "../payments/subscriptionEmails.js";
import type * as payments_subscriptionHelpers from "../payments/subscriptionHelpers.js";
import type * as payments_webhookHandlers from "../payments/webhookHandlers.js";
import type * as payments_webhookMutations from "../payments/webhookMutations.js";
import type * as registerInterest from "../registerInterest.js";
import type * as resendWebhookHandler from "../resendWebhookHandler.js";
import type * as telegramPairingTokens from "../telegramPairingTokens.js";
import type * as userPreferences from "../userPreferences.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  alertRules: typeof alertRules;
  apiKeys: typeof apiKeys;
  "config/productCatalog": typeof config_productCatalog;
  constants: typeof constants;
  contactMessages: typeof contactMessages;
  crons: typeof crons;
  emailSuppressions: typeof emailSuppressions;
  entitlements: typeof entitlements;
  http: typeof http;
  "lib/auth": typeof lib_auth;
  "lib/dodo": typeof lib_dodo;
  "lib/entitlements": typeof lib_entitlements;
  "lib/env": typeof lib_env;
  "lib/identitySigning": typeof lib_identitySigning;
  notificationChannels: typeof notificationChannels;
  "payments/billing": typeof payments_billing;
  "payments/cacheActions": typeof payments_cacheActions;
  "payments/checkout": typeof payments_checkout;
  "payments/seedProductPlans": typeof payments_seedProductPlans;
  "payments/subscriptionEmails": typeof payments_subscriptionEmails;
  "payments/subscriptionHelpers": typeof payments_subscriptionHelpers;
  "payments/webhookHandlers": typeof payments_webhookHandlers;
  "payments/webhookMutations": typeof payments_webhookMutations;
  registerInterest: typeof registerInterest;
  resendWebhookHandler: typeof resendWebhookHandler;
  telegramPairingTokens: typeof telegramPairingTokens;
  userPreferences: typeof userPreferences;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
