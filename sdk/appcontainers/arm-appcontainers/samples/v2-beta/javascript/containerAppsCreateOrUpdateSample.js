/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update a Container App.
 *
 * @summary Create or update a Container App.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/ContainerApps_CreateOrUpdate.json
 */
async function createOrUpdateContainerApp() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const containerAppName = "testcontainerApp0";
  const containerAppEnvelope = {
    configuration: {
      dapr: {
        appPort: 3000,
        appProtocol: "http",
        enableApiLogging: true,
        enabled: true,
        httpMaxRequestSize: 10,
        httpReadBufferSize: 30,
        logLevel: "debug",
      },
      ingress: {
        customDomains: [
          {
            name: "www.my-name.com",
            bindingType: "SniEnabled",
            certificateId:
              "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.App/managedEnvironments/demokube/certificates/my-certificate-for-my-name-dot-com",
          },
          {
            name: "www.my-other-name.com",
            bindingType: "SniEnabled",
            certificateId:
              "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.App/managedEnvironments/demokube/certificates/my-certificate-for-my-other-name-dot-com",
          },
        ],
        external: true,
        ipSecurityRestrictions: [
          {
            name: "Allow work IP A subnet",
            description: "Allowing all IP's within the subnet below to access containerapp",
            action: "Allow",
            ipAddressRange: "192.168.1.1/32",
          },
          {
            name: "Allow work IP B subnet",
            description: "Allowing all IP's within the subnet below to access containerapp",
            action: "Allow",
            ipAddressRange: "192.168.1.1/8",
          },
        ],
        targetPort: 3000,
        traffic: [
          {
            label: "production",
            revisionName: "testcontainerApp0-ab1234",
            weight: 100,
          },
        ],
      },
      maxInactiveRevisions: 10,
    },
    environmentId:
      "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.App/managedEnvironments/demokube",
    location: "East US",
    template: {
      containers: [
        {
          name: "testcontainerApp0",
          image: "repo/testcontainerApp0:v1",
          probes: [
            {
              type: "Liveness",
              httpGet: {
                path: "/health",
                httpHeaders: [{ name: "Custom-Header", value: "Awesome" }],
                port: 8080,
              },
              initialDelaySeconds: 3,
              periodSeconds: 3,
            },
          ],
        },
      ],
      initContainers: [
        {
          name: "testinitcontainerApp0",
          args: ["-c", "while true; do echo hello; sleep 10;done"],
          command: ["/bin/sh"],
          image: "repo/testcontainerApp0:v4",
          resources: { cpu: 0.2, memory: "100Mi" },
        },
      ],
      scale: {
        maxReplicas: 5,
        minReplicas: 1,
        rules: [
          {
            name: "httpscalingrule",
            custom: { type: "http", metadata: { concurrentRequests: "50" } },
          },
        ],
      },
    },
    workloadProfileType: "GeneralPurpose",
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.containerApps.beginCreateOrUpdateAndWait(
    resourceGroupName,
    containerAppName,
    containerAppEnvelope
  );
  console.log(result);
}

createOrUpdateContainerApp().catch(console.error);

/**
 * This sample demonstrates how to Create or update a Container App.
 *
 * @summary Create or update a Container App.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/ContainerApps_TcpApp_CreateOrUpdate.json
 */
async function createOrUpdateTcpApp() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const containerAppName = "testcontainerAppTcp";
  const containerAppEnvelope = {
    configuration: {
      ingress: {
        exposedPort: 4000,
        external: true,
        targetPort: 3000,
        traffic: [{ revisionName: "testcontainerAppTcp-ab1234", weight: 100 }],
        transport: "tcp",
      },
    },
    environmentId:
      "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/rg/providers/Microsoft.App/managedEnvironments/demokube",
    location: "East US",
    template: {
      containers: [
        {
          name: "testcontainerAppTcp",
          image: "repo/testcontainerAppTcp:v1",
          probes: [
            {
              type: "Liveness",
              initialDelaySeconds: 3,
              periodSeconds: 3,
              tcpSocket: { port: 8080 },
            },
          ],
        },
      ],
      scale: {
        maxReplicas: 5,
        minReplicas: 1,
        rules: [
          {
            name: "tcpscalingrule",
            tcp: { metadata: { concurrentConnections: "50" } },
          },
        ],
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.containerApps.beginCreateOrUpdateAndWait(
    resourceGroupName,
    containerAppName,
    containerAppEnvelope
  );
  console.log(result);
}

createOrUpdateTcpApp().catch(console.error);
