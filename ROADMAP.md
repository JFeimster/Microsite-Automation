# Recommended Pages

These module surfaces came from the Flash UI concept and can guide phased implementation.

## Template Marketplace & Component Library
- TemplateGallery.tsx
- TemplateCard.tsx
- ComponentPreview.tsx
- BrandThemeConfig.tsx
- useTemplateLibrary.ts
- styles/Marketplace.module.css

## Content Integration & Notion Sync Center
- NotionConnector.tsx
- SchemaMapper.tsx
- SyncScheduler.tsx
- DataValidationLog.tsx
- useNotionAuth.ts
- utils/notionSyncEngine.js

## Global Domain & DNS Command Center
- DomainInventory.tsx
- DnsRecordEditor.tsx
- SslStatusTracker.tsx
- HealthMonitorGraph.tsx
- useDomainApi.ts
- constants/dnsConfig.json

## Conversion Analytics & Lead Performance Hub
- LeadAnalyticsDashboard.tsx
- ConversionFunnel.tsx
- AbTestComparison.tsx
- ExportReportButton.tsx
- useAnalyticsStream.ts
- charts/LeadVolumeChart.tsx

## Deployment Governance & Pipeline Logs
- PipelineTimeline.tsx
- DeploymentAuditLogs.tsx
- EnvVarManager.tsx
- RollbackControlPanel.tsx
- useDeploymentPipeline.ts
- styles/TerminalTheme.css

## Notes
- Start with a useful internal control plane, not a fake dashboard.
- Prioritize template selection, route assignment, domain targeting, and deploy-ready config output.
- Keep analytics, DNS, and pipeline governance as phased modules unless they directly unblock launch velocity.
