/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SynapseManagementClient } = require("@azure/arm-synapse");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Checks that the kusto pool name is valid and is not already in use.
 *
 * @summary Checks that the kusto pool name is valid and is not already in use.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/preview/2021-06-01-preview/examples/KustoPoolsCheckNameAvailability.json
 */
async function kustoPoolsCheckNameAvailability() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const location = "westus";
  const kustoPoolName = {
    name: "kustoclusterrptest4",
    type: "Microsoft.Synapse/workspaces/kustoPools",
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.kustoPools.checkNameAvailability(location, kustoPoolName);
  console.log(result);
}

kustoPoolsCheckNameAvailability().catch(console.error);
