# DOCUMENT TEMPLATE FOR BUMI BAHRU ARCHIVES

Copy this structure for new archive documents.

## Frontmatter Structure

```yaml
---
# Basic Information
title: "Document Title Here"
date: "Day 13, Moon 3, Year 1 ABM"  # Your fictional date - display only
sortDate: 2021-03-13  # Real date in YYYY-MM-DD format for chronological sorting
description: "Brief description of document contents and significance"

# Provenance (Who Created It)
author: "Author Name, Title"
department: "Urban Development"  # Choose from list below
division: "Optional Division Name"  # Optional: specific division within department

# Document Type (What It Is)
documentType: "Report"  # Choose from list below

# Subject/Topic (What It's About)
subjects:  # Array - choose one or more from list below
  - "Infrastructure"
  - "Resource Allocation"

# Additional Metadata (Optional)
classification: "Internal"  # Public, Internal, Confidential, or Encrypted
relatedDocs:  # Optional: array of related document slugs
  - "001-previous-document"
  - "015-related-document"
---
```

## Your Fictional Calendar System

**How it works:**
- `date`: Your fictional calendar system (e.g., "Day 13, Moon 3, Year 1 ABM")
  - This is what readers see
  - Can be any format you want
  - Used for display only

- `sortDate`: Standard YYYY-MM-DD format
  - Used for chronological sorting
  - Determines which "Year X ABM" category it falls into
  - Required for browse pages to work

**Example mapping:**
- Year 1 ABM = 2021 (sortDate: 2021-XX-XX)
- Year 2 ABM = 2022 (sortDate: 2022-XX-XX)
- Year 3 ABM = 2023 (sortDate: 2023-XX-XX)
- Year 4 ABM = 2024 (sortDate: 2024-XX-XX)
- Year 5 ABM = 2025 (sortDate: 2025-XX-XX)

Adjust these in `/src/pages/archives/by-date.astro` if needed (line ~9).

---

## Available Options

### Departments (Required)
- Urban Development
- Industrial Operations
- Harbor Operations
- Corporate Management
- Technical Services
- Security
- Community Services
- Unknown

### Document Types (Required)
- Memo
- Report
- Email
- Log
- Assessment
- Correspondence
- Minutes
- Notice
- Requisition
- Incident Report
- Encrypted Message
- Meta-Document

### Subjects (Required - at least one)
- Infrastructure
- Resource Allocation
- Crisis Response
- Community Welfare
- Financial Operations
- Underground Economy
- Information Management
- Governance
- Family Integration
- Technical Systems
- Dispute Resolution
- External Relations

### Classification (Optional)
- Public
- Internal
- Confidential
- Encrypted

---

## Example Document

```yaml
---
title: "Maintenance Status Report - Zone E"
date: "Day 17, Moon 4, Year 3 ABM"
sortDate: 2023-04-17
author: "M. Santos, Maintenance Crew Lead"
department: "Technical Services"
division: "Field Operations"
documentType: "Report"
subjects: 
  - "Infrastructure"
  - "Community Welfare"
classification: "Internal"
description: "Weekly maintenance assessment for worker housing Zone E"
---

Your document content starts here...
```

---

## Tips for Your Fictional Calendar

**Consistency is key:**
- Decide how many "days" per "moon" (month)
- Decide how many "moons" per year
- Keep track in a separate reference document
- The `sortDate` ensures chronological order even if your fictional calendar is complex

**Example systems:**
- Traditional months: "Day 13, Moon 3, Year 1 ABM" (Moon 3 = March)
- Custom moons: "Day 7, Harvest Moon, Year 1 ABM"
- Simple numbering: "Day 73, Year 1 ABM"
- Season-based: "Day 15, Late Monsoon, Year 1 ABM"

Choose what fits your worldbuilding!
