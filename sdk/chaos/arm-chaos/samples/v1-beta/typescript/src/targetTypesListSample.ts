/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  TargetTypesListOptionalParams,
  ChaosManagementClient
} from "@azure/arm-chaos";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get a list of Target Type resources for given location.
 *
 * @summary Get a list of Target Type resources for given location.
 * x-ms-original-file: specification/chaos/resource-manager/Microsoft.Chaos/preview/2022-07-01-preview/examples/ListTargetTypes.json
 */
async function listAllTargetTypesForWestus2Location() {
  const subscriptionId = "6b052e15-03d3-4f17-b2e1-be7f07588291";
  const locationName = "westus2";
  const continuationToken = undefined;
  const options: TargetTypesListOptionalParams = { continuationToken };
  const credential = new DefaultAzureCredential();
  const client = new ChaosManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.targetTypes.list(locationName, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAllTargetTypesForWestus2Location().catch(console.error);
