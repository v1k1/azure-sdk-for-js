# Release History
    
## 2.0.0-beta.1 (2022-10-12)
    
**Features**

  - Added operation group AvailableWorkloadProfiles
  - Added operation group BillingMeters
  - Added operation group ConnectedEnvironments
  - Added operation group ConnectedEnvironmentsCertificates
  - Added operation group ConnectedEnvironmentsDaprComponents
  - Added operation group ConnectedEnvironmentsStorages
  - Added operation group ContainerAppsDiagnostics
  - Added operation group ManagedEnvironmentDiagnostics
  - Added operation group ManagedEnvironmentsDiagnostics
  - Added operation ContainerApps.getAuthToken
  - Added operation ManagedEnvironments.getAuthToken
  - Added operation ManagedEnvironments.listWorkloadProfileStates
  - Added Interface AvailableWorkloadProfile
  - Added Interface AvailableWorkloadProfileProperties
  - Added Interface AvailableWorkloadProfilesCollection
  - Added Interface AvailableWorkloadProfilesGetNextOptionalParams
  - Added Interface AvailableWorkloadProfilesGetOptionalParams
  - Added Interface BaseContainer
  - Added Interface BillingMeter
  - Added Interface BillingMeterCollection
  - Added Interface BillingMeterProperties
  - Added Interface BillingMetersGetOptionalParams
  - Added Interface ConnectedEnvironment
  - Added Interface ConnectedEnvironmentCollection
  - Added Interface ConnectedEnvironmentsCertificatesCreateOrUpdateOptionalParams
  - Added Interface ConnectedEnvironmentsCertificatesDeleteOptionalParams
  - Added Interface ConnectedEnvironmentsCertificatesGetOptionalParams
  - Added Interface ConnectedEnvironmentsCertificatesListNextOptionalParams
  - Added Interface ConnectedEnvironmentsCertificatesListOptionalParams
  - Added Interface ConnectedEnvironmentsCertificatesUpdateOptionalParams
  - Added Interface ConnectedEnvironmentsCheckNameAvailabilityOptionalParams
  - Added Interface ConnectedEnvironmentsCreateOrUpdateOptionalParams
  - Added Interface ConnectedEnvironmentsDaprComponentsCreateOrUpdateOptionalParams
  - Added Interface ConnectedEnvironmentsDaprComponentsDeleteOptionalParams
  - Added Interface ConnectedEnvironmentsDaprComponentsGetOptionalParams
  - Added Interface ConnectedEnvironmentsDaprComponentsListNextOptionalParams
  - Added Interface ConnectedEnvironmentsDaprComponentsListOptionalParams
  - Added Interface ConnectedEnvironmentsDaprComponentsListSecretsOptionalParams
  - Added Interface ConnectedEnvironmentsDeleteOptionalParams
  - Added Interface ConnectedEnvironmentsGetOptionalParams
  - Added Interface ConnectedEnvironmentsListByResourceGroupNextOptionalParams
  - Added Interface ConnectedEnvironmentsListByResourceGroupOptionalParams
  - Added Interface ConnectedEnvironmentsListBySubscriptionNextOptionalParams
  - Added Interface ConnectedEnvironmentsListBySubscriptionOptionalParams
  - Added Interface ConnectedEnvironmentsStoragesCreateOrUpdateOptionalParams
  - Added Interface ConnectedEnvironmentsStoragesDeleteOptionalParams
  - Added Interface ConnectedEnvironmentsStoragesGetOptionalParams
  - Added Interface ConnectedEnvironmentsStoragesListOptionalParams
  - Added Interface ConnectedEnvironmentStorage
  - Added Interface ConnectedEnvironmentStorageProperties
  - Added Interface ConnectedEnvironmentStoragesCollection
  - Added Interface ConnectedEnvironmentsUpdateOptionalParams
  - Added Interface ContainerAppAuthToken
  - Added Interface ContainerAppsDiagnosticsGetDetectorOptionalParams
  - Added Interface ContainerAppsDiagnosticsGetRevisionOptionalParams
  - Added Interface ContainerAppsDiagnosticsGetRootOptionalParams
  - Added Interface ContainerAppsDiagnosticsListDetectorsNextOptionalParams
  - Added Interface ContainerAppsDiagnosticsListDetectorsOptionalParams
  - Added Interface ContainerAppsDiagnosticsListRevisionsNextOptionalParams
  - Added Interface ContainerAppsDiagnosticsListRevisionsOptionalParams
  - Added Interface ContainerAppsGetAuthTokenOptionalParams
  - Added Interface CustomDomainConfiguration
  - Added Interface CustomHostnameAnalysisResultCustomDomainVerificationFailureInfo
  - Added Interface CustomHostnameAnalysisResultCustomDomainVerificationFailureInfoDetailsItem
  - Added Interface DaprSecret
  - Added Interface DiagnosticDataProviderMetadata
  - Added Interface DiagnosticDataProviderMetadataPropertyBagItem
  - Added Interface DiagnosticDataTableResponseColumn
  - Added Interface DiagnosticDataTableResponseObject
  - Added Interface DiagnosticRendering
  - Added Interface Diagnostics
  - Added Interface DiagnosticsCollection
  - Added Interface DiagnosticsDataApiResponse
  - Added Interface DiagnosticsDefinition
  - Added Interface DiagnosticsProperties
  - Added Interface DiagnosticsStatus
  - Added Interface DiagnosticSupportTopic
  - Added Interface EnvironmentAuthToken
  - Added Interface EnvironmentSkuProperties
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Interface ExtendedLocation
  - Added Interface InitContainer
  - Added Interface IpSecurityRestrictionRule
  - Added Interface ManagedEnvironmentDiagnosticsGetDetectorOptionalParams
  - Added Interface ManagedEnvironmentDiagnosticsListDetectorsOptionalParams
  - Added Interface ManagedEnvironmentOutboundSettings
  - Added Interface ManagedEnvironmentsDiagnosticsGetRootOptionalParams
  - Added Interface ManagedEnvironmentsGetAuthTokenOptionalParams
  - Added Interface ManagedEnvironmentsListWorkloadProfileStatesNextOptionalParams
  - Added Interface ManagedEnvironmentsListWorkloadProfileStatesOptionalParams
  - Added Interface TcpScaleRule
  - Added Interface WorkloadProfile
  - Added Interface WorkloadProfileStates
  - Added Interface WorkloadProfileStatesCollection
  - Added Interface WorkloadProfileStatesProperties
  - Added Type Alias Action
  - Added Type Alias Applicability
  - Added Type Alias AvailableWorkloadProfilesGetNextResponse
  - Added Type Alias AvailableWorkloadProfilesGetResponse
  - Added Type Alias BillingMetersGetResponse
  - Added Type Alias Category
  - Added Type Alias ConnectedEnvironmentProvisioningState
  - Added Type Alias ConnectedEnvironmentsCertificatesCreateOrUpdateResponse
  - Added Type Alias ConnectedEnvironmentsCertificatesGetResponse
  - Added Type Alias ConnectedEnvironmentsCertificatesListNextResponse
  - Added Type Alias ConnectedEnvironmentsCertificatesListResponse
  - Added Type Alias ConnectedEnvironmentsCertificatesUpdateResponse
  - Added Type Alias ConnectedEnvironmentsCheckNameAvailabilityResponse
  - Added Type Alias ConnectedEnvironmentsCreateOrUpdateResponse
  - Added Type Alias ConnectedEnvironmentsDaprComponentsCreateOrUpdateResponse
  - Added Type Alias ConnectedEnvironmentsDaprComponentsGetResponse
  - Added Type Alias ConnectedEnvironmentsDaprComponentsListNextResponse
  - Added Type Alias ConnectedEnvironmentsDaprComponentsListResponse
  - Added Type Alias ConnectedEnvironmentsDaprComponentsListSecretsResponse
  - Added Type Alias ConnectedEnvironmentsGetResponse
  - Added Type Alias ConnectedEnvironmentsListByResourceGroupNextResponse
  - Added Type Alias ConnectedEnvironmentsListByResourceGroupResponse
  - Added Type Alias ConnectedEnvironmentsListBySubscriptionNextResponse
  - Added Type Alias ConnectedEnvironmentsListBySubscriptionResponse
  - Added Type Alias ConnectedEnvironmentsStoragesCreateOrUpdateResponse
  - Added Type Alias ConnectedEnvironmentsStoragesGetResponse
  - Added Type Alias ConnectedEnvironmentsStoragesListResponse
  - Added Type Alias ConnectedEnvironmentsUpdateResponse
  - Added Type Alias ContainerAppsDiagnosticsGetDetectorResponse
  - Added Type Alias ContainerAppsDiagnosticsGetRevisionResponse
  - Added Type Alias ContainerAppsDiagnosticsGetRootResponse
  - Added Type Alias ContainerAppsDiagnosticsListDetectorsNextResponse
  - Added Type Alias ContainerAppsDiagnosticsListDetectorsResponse
  - Added Type Alias ContainerAppsDiagnosticsListRevisionsNextResponse
  - Added Type Alias ContainerAppsDiagnosticsListRevisionsResponse
  - Added Type Alias ContainerAppsGetAuthTokenResponse
  - Added Type Alias ExtendedLocationTypes
  - Added Type Alias LogLevel
  - Added Type Alias ManagedEnvironmentDiagnosticsGetDetectorResponse
  - Added Type Alias ManagedEnvironmentDiagnosticsListDetectorsResponse
  - Added Type Alias ManagedEnvironmentOutBoundType
  - Added Type Alias ManagedEnvironmentsDiagnosticsGetRootResponse
  - Added Type Alias ManagedEnvironmentsGetAuthTokenResponse
  - Added Type Alias ManagedEnvironmentsListWorkloadProfileStatesNextResponse
  - Added Type Alias ManagedEnvironmentsListWorkloadProfileStatesResponse
  - Added Type Alias SkuName
  - Interface CertificateProperties has a new optional parameter subjectAlternativeNames
  - Interface Configuration has a new optional parameter maxInactiveRevisions
  - Interface ContainerApp has a new optional parameter environmentId
  - Interface ContainerApp has a new optional parameter eventStreamEndpoint
  - Interface ContainerApp has a new optional parameter extendedLocation
  - Interface ContainerApp has a new optional parameter workloadProfileType
  - Interface CustomHostnameAnalysisResult has a new optional parameter conflictWithEnvironmentCustomDomain
  - Interface Dapr has a new optional parameter enableApiLogging
  - Interface Dapr has a new optional parameter httpMaxRequestSize
  - Interface Dapr has a new optional parameter httpReadBufferSize
  - Interface Dapr has a new optional parameter logLevel
  - Interface DaprComponent has a new optional parameter secretStoreComponent
  - Interface Ingress has a new optional parameter exposedPort
  - Interface Ingress has a new optional parameter ipSecurityRestrictions
  - Interface ManagedEnvironment has a new optional parameter customDomainConfiguration
  - Interface ManagedEnvironment has a new optional parameter eventStreamEndpoint
  - Interface ManagedEnvironment has a new optional parameter sku
  - Interface ManagedEnvironment has a new optional parameter workloadProfiles
  - Interface ReplicaContainer has a new optional parameter execEndpoint
  - Interface ReplicaContainer has a new optional parameter logStreamEndpoint
  - Interface Revision has a new optional parameter lastActiveTime
  - Interface ScaleRule has a new optional parameter tcp
  - Interface Template has a new optional parameter initContainers
  - Interface VnetConfiguration has a new optional parameter outboundSettings
  - Class ContainerAppsAPIClient has a new parameter availableWorkloadProfiles
  - Class ContainerAppsAPIClient has a new parameter billingMeters
  - Class ContainerAppsAPIClient has a new parameter connectedEnvironments
  - Class ContainerAppsAPIClient has a new parameter connectedEnvironmentsCertificates
  - Class ContainerAppsAPIClient has a new parameter connectedEnvironmentsDaprComponents
  - Class ContainerAppsAPIClient has a new parameter connectedEnvironmentsStorages
  - Class ContainerAppsAPIClient has a new parameter containerAppsDiagnostics
  - Class ContainerAppsAPIClient has a new parameter managedEnvironmentDiagnostics
  - Class ContainerAppsAPIClient has a new parameter managedEnvironmentsDiagnostics
  - Added Enum KnownAction
  - Added Enum KnownApplicability
  - Added Enum KnownCategory
  - Added Enum KnownConnectedEnvironmentProvisioningState
  - Added Enum KnownExtendedLocationTypes
  - Added Enum KnownLogLevel
  - Added Enum KnownManagedEnvironmentOutBoundType
  - Added Enum KnownSkuName
  - Enum KnownContainerAppProvisioningState has a new value Deleting
  - Enum KnownIngressTransportMethod has a new value Tcp

**Breaking Changes**

  - Interface Container no longer has parameter args
  - Interface Container no longer has parameter command
  - Interface Container no longer has parameter env
  - Interface Container no longer has parameter image
  - Interface Container no longer has parameter name
  - Interface Container no longer has parameter resources
  - Interface Container no longer has parameter volumeMounts
    
## 1.1.2 (2022-10-08)

**Bugs Fixed**

  -  revert credential scopes

## 1.1.1 (2022-09-30)

**Bugs Fixed**

  -  fix better user experience of credential scopes in government cloud

## 1.1.0 (2022-08-02)
    
**Features**

  - Added Interface AuthConfig
  - Added Interface Certificate
  - Added Interface ContainerApp
  - Added Interface CustomHostnameAnalysisResult
  - Added Interface DaprComponent
  - Added Interface ManagedEnvironment
  - Added Interface ManagedEnvironmentStorage
  - Added Interface ProxyResource
  - Added Interface Replica
  - Added Interface Revision
  - Added Interface SourceControl
  - Added Interface TrackedResource
    
    
## 1.0.0 (2022-05-20)

The package of @azure/arm-appcontainers is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
