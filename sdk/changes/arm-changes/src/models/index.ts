/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** The list of resources */
export interface ChangeResourceListResult {
  /** The link used to get the next page of Change Resources */
  nextLink?: string;
  /** The list of resources */
  value?: ChangeResourceResult[];
}

/** The properties of a change */
export interface ChangeProperties {
  /**
   * The fully qualified ID of the target resource that was changed
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly targetResourceId?: string;
  /**
   * The namespace and type of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly targetResourceType?: string;
  /**
   * The type of change that was captured in the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly changeType?: ChangeType;
  /** Details about the change resource */
  changeAttributes?: ChangeAttributes;
  /** A dictionary with changed property name as a key and the change details as the value */
  changes?: { [propertyName: string]: ChangeBase };
}

/** Details about the change resource */
export interface ChangeAttributes {
  /**
   * The ARM correlation ID of the change resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly correlationId?: string;
  /**
   * The time the change(s) on the target resource ocurred
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly timestamp?: string;
  /**
   * The number of changes this resource captures
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly changesCount?: number;
  /**
   * The GUID of the previous snapshot
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly previousResourceSnapshotId?: string;
  /**
   * The GUID of the new snapshot
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly newResourceSnapshotId?: string;
}

/** An individual change on the target resource */
export interface ChangeBase {
  /**
   * The type of change that occurred
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly propertyChangeType?: PropertyChangeType;
  /**
   * The entity that made the change
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly changeCategory?: ChangeCategory;
  /**
   * The target resource property value before the change
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly previousValue?: string;
  /**
   * The target resource property value after the change
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly newValue?: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** Change Resource */
export type ChangeResourceResult = Resource & {
  /** The properties of a change */
  properties?: ChangeProperties;
};
/** Defines values for ChangeType. */
export type ChangeType = "Update" | "Delete" | "Create";
/** Defines values for PropertyChangeType. */
export type PropertyChangeType = "Update" | "Insert" | "Remove";
/** Defines values for ChangeCategory. */
export type ChangeCategory = "User" | "System";

/** Optional parameters. */
export interface ChangesListOptionalParams extends coreClient.OperationOptions {
  /** (Optional) Set the maximum number of results per response. */
  top?: number;
  /** (Optional) The page-continuation token */
  skipToken?: string;
}

/** Contains response data for the list operation. */
export type ChangesListResponse = ChangeResourceListResult;

/** Optional parameters. */
export interface ChangesGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ChangesGetResponse = ChangeResourceResult;

/** Optional parameters. */
export interface ChangesListNextOptionalParams
  extends coreClient.OperationOptions {
  /** (Optional) Set the maximum number of results per response. */
  top?: number;
  /** (Optional) The page-continuation token */
  skipToken?: string;
}

/** Contains response data for the listNext operation. */
export type ChangesListNextResponse = ChangeResourceListResult;

/** Optional parameters. */
export interface ChangesClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
