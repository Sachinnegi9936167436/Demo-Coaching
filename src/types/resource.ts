/**
 * Academic Diagnostic Vault and Learning Resource Type Definitions
 */

export interface LearningResource {
  id: string;
  title: string;
  category: string;
  type: string;
  size: string;
  downloads: string;
  description: string;
  topics: string[];
}
