import { defineCollection, z } from 'astro:content';

const archives = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    
    // Fictional date for display (e.g., "Day 13, Moon 3, Year 1 ABM")
    date: z.string(),
    
    // Real date for sorting (YYYY-MM-DD format)
    sortDate: z.coerce.date(),
    
    // Provenance (Who Created It)
    author: z.string(),
    department: z.enum([
      'Urban Development',
      'Industrial Operations',
      'Harbor Operations',
      'Corporate Management',
      'Technical Services',
      'Security',
      'Community Services',
      'Unknown'
    ]),
    division: z.string().optional(),
    
    // Document Type (What It Is)
    documentType: z.enum([
      'Memo',
      'Report',
      'Email',
      'Log',
      'Assessment',
      'Correspondence',
      'Minutes',
      'Notice',
      'Requisition',
      'Incident Report',
      'Encrypted Message',
      'Meta-Document'
    ]),
    
    // Chronology (When) - sortDate used for chronological ordering
    // Year 3-5 ABM will be derived from sortDate
    
    // Subject/Topic (What It's About)
    subjects: z.array(z.enum([
      'Infrastructure',
      'Resource Allocation',
      'Crisis Response',
      'Community Welfare',
      'Financial Operations',
      'Underground Economy',
      'Information Management',
      'Governance',
      'Family Integration',
      'Technical Systems',
      'Dispute Resolution',
      'External Relations'
    ])),
    
    // Additional metadata
    classification: z.enum(['Public', 'Internal', 'Confidential', 'Encrypted']).optional(),
    relatedDocs: z.array(z.string()).optional(),
    description: z.string(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { archives, blog };
