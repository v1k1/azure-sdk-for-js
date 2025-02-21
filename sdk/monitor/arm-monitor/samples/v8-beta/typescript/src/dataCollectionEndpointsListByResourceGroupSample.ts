/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists all data collection endpoints in the specified resource group.
 *
 * @summary Lists all data collection endpoints in the specified resource group.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/preview/2021-09-01-preview/examples/DataCollectionEndpointsListByResourceGroup.json
 */
async function listDataCollectionEndpointsByResourceGroup() {
  const subscriptionId = "703362b3-f278-4e4b-9179-c76eaf41ffc2";
  const resourceGroupName = "myResourceGroup";
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.dataCollectionEndpoints.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listDataCollectionEndpointsByResourceGroup().catch(console.error);
