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
 * This sample demonstrates how to Deletes a firewall rule
 *
 * @summary Deletes a firewall rule
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/DeleteIpFirewallRule.json
 */
async function deleteAnIPFirewallRuleFromAWorkspace() {
  const subscriptionId = "01234567-89ab-4def-0123-456789abcdef";
  const resourceGroupName = "ExampleResourceGroup";
  const workspaceName = "ExampleWorkspace";
  const ruleName = "ExampleIpFirewallRule";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.ipFirewallRules.beginDeleteAndWait(
    resourceGroupName,
    workspaceName,
    ruleName
  );
  console.log(result);
}

deleteAnIPFirewallRuleFromAWorkspace().catch(console.error);
