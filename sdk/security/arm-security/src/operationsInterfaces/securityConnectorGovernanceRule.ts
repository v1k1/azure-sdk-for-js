/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  GovernanceRule,
  SecurityConnectorGovernanceRuleListOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SecurityConnectorGovernanceRule. */
export interface SecurityConnectorGovernanceRule {
  /**
   * Get a list of all relevant governanceRules over a security connector level scope
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param securityConnectorName The security connector name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    securityConnectorName: string,
    options?: SecurityConnectorGovernanceRuleListOptionalParams
  ): PagedAsyncIterableIterator<GovernanceRule>;
}
