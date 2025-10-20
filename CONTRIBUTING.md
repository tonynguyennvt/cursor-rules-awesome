# Contributing to Cursor Rules Awesome

**Last Updated:** 2025-10-20

Thank you for your interest in contributing to the Cursor Rules Awesome project. This document provides guidelines for contributing improvements, reporting issues, and suggesting new features.

---

## How to Contribute

### Types of Contributions Welcome

- **Bug Reports** - Errors, outdated information, or inaccuracies
- **Feature Suggestions** - New sections, topics, or improvements
- **Documentation Improvements** - Clarity enhancements, examples, corrections
- **Translations** - Help make standards accessible globally
- **New Language Guidelines** - Add support for more programming languages
- **Tool Integrations** - Integration with linters, formatters, and other tools

---

## Contribution Process

### 1. Before Contributing

- Check [existing issues](https://github.com/tonynguyennvt/cursor-rules-awesome/issues) to avoid duplicates
- For major changes, open an issue first to discuss your proposal
- Review the current `.cursorrules` file to understand structure and format
- Familiarize yourself with the 8-part organization system

### 2. Making Changes

**Fork and Clone:**
```bash
# Fork repository on GitHub first
# Then clone your fork
git clone https://github.com/tonynguyennvt/cursor-rules-awesome.git
cd cursor-rules-awesome
```

**Create Branch:**
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

**Make Changes:**
- Edit `.cursorrules` file following existing format
- Add to appropriate section or create new section if justified
- Update Table of Contents if adding new major section
- Add cross-references to related sections where appropriate
- Follow the established structure and formatting

**Test Your Changes:**
```bash
# Copy to a test project
cp .cursorrules /path/to/test-project/

# Test with Cursor AI
# Generate code and verify standards are applied correctly
# Ensure no syntax errors or formatting issues
```

### 3. Submit Pull Request

**Commit Changes:**
```bash
git add .
git commit -m "feat: add best practices for XYZ technology"
# or
git commit -m "fix: correct outdated information in Section 23"
# or
git commit -m "docs: improve clarity in Authentication section"
```

Use [Conventional Commits](https://www.conventionalcommits.org/) format:
- `feat:` New features or sections
- `fix:` Bug fixes or corrections
- `docs:` Documentation improvements
- `refactor:` Restructuring without changing content
- `style:` Formatting changes

**Push and Create PR:**
```bash
git push origin your-branch-name
# Then create Pull Request on GitHub
```

**PR Description Should Include:**
- Clear description of what was changed and why
- Which section(s) are affected
- Testing performed (if applicable)
- Related issue number (if applicable)
- Any breaking changes or impacts

---

## Content Guidelines

### Standards for Contributions

**DO:**
- Use professional, technical language
- Provide specific, actionable guidance
- Include concrete examples where helpful
- Reference authoritative sources (ISO, IEEE, W3C, OWASP, NIST, RFC, etc.)
- Follow existing formatting and structure
- Add cross-references to related sections
- Keep content concise yet comprehensive
- Use proper grammar and spelling
- Test recommendations before suggesting
- Cite sources for industry statistics

**DO NOT:**
- Add vague or theoretical advice without practical application
- Include personal opinions without industry backing or standards reference
- Duplicate existing content unnecessarily
- Add promotional content or links to paid services
- Include breaking changes without prior discussion
- Add emojis or unprofessional language to the guidelines
- Make unsupported claims about tools or technologies
- Add outdated practices or deprecated technologies

### Format Standards

**Section Structure:**
```markdown
## XX. SECTION TITLE

**Related Sections:** [Link](#related-section) | [Link2](#another-section)

**Standards:** Relevant international standards (if applicable)

### Subsection Title (if needed)
- Guideline point 1
- Guideline point 2
  - Sub-point with additional detail
- Guideline point 3

### Another Subsection
- More guidelines
- With specific, actionable items
```

**Cross-References:**
Always add "Related Sections" header for new major sections, linking to 2-3 relevant existing sections.

**Standards References:**
Include relevant standards (ISO, IEEE, W3C, OWASP, RFC, NIST, CIS) where applicable to add authority.

---

## Review Process

### What Reviewers Evaluate

1. **Accuracy**: Is the information correct, current, and well-sourced?
2. **Relevance**: Does it fit within the document's scope?
3. **Quality**: Is it well-written, clear, and professional?
4. **Completeness**: Is sufficient detail provided?
5. **Consistency**: Does it match existing style and format?
6. **Value**: Does it add significant value to users?
7. **Standards Compliance**: Does it reference appropriate standards?

### Review Timeline

- **Initial Review**: Within 3-5 business days
- **Feedback**: Provided if changes are needed
- **Final Review**: Within 2-3 days after updates
- **Merge**: Once approved by 2+ maintainers

---

## Reporting Issues

### Bug Reports

Use GitHub Issues with the following format:

**Title:**
- `[Bug] Section XX: Brief description`
- Example: `[Bug] Section 23: Outdated Firebase Authentication methods`

**Issue Content:**
- **Section Affected**: Which section has the issue
- **Current Content**: What is currently written (quote if possible)
- **Issue Description**: What's wrong or outdated
- **Expected Content**: What it should say
- **Suggested Fix**: Your proposed correction (if you have one)
- **References**: Links to documentation, RFCs, or standards supporting your point

### Feature Requests

**Title:**
- `[Feature] Add guidelines for XYZ technology`
- Example: `[Feature] Add guidelines for Deno runtime environment`

**Issue Content:**
- **Proposed Addition**: What should be added
- **Rationale**: Why this is valuable to users
- **Scope**: Estimated amount of content needed
- **Proposed Placement**: Which existing section or should it be new section
- **References**: Any relevant standards, documentation, or authoritative sources

---

## Translation Guidelines

### Adding Language Translations

We welcome translations to make these standards accessible to developers worldwide.

**Process:**
1. Create language-specific file: `.cursorrules.{lang-code}`
   - Spanish: `.cursorrules.es`
   - Chinese: `.cursorrules.zh`
   - French: `.cursorrules.fr`
   - German: `.cursorrules.de`
   - Japanese: `.cursorrules.ja`
2. Translate content while maintaining exact structure
3. Keep technical terms in English where standard in industry
4. Add language information to README.md
5. Submit pull request with translation

**Priority Languages:**
- Spanish (es)
- Chinese Simplified (zh)
- French (fr)
- German (de)
- Japanese (ja)
- Portuguese (pt)

**Translation Standards:**
- Maintain technical accuracy
- Use professional language
- Keep formatting identical to English version
- Preserve all code examples in English
- Translate comments and explanatory text only

---

## Recognition Program

### Contributor Recognition

All contributors will be:
- Listed in CONTRIBUTORS.md file
- Mentioned in release notes for their contributions
- Credited in documentation updates
- Recognized by the community

### Contribution Levels

- **Bronze Contributor**: 1-5 accepted contributions
- **Silver Contributor**: 6-15 accepted contributions  
- **Gold Contributor**: 16-30 accepted contributions
- **Platinum Contributor**: 31+ contributions or major feature additions

---

## Code of Conduct

### Our Standards

**Expected Behaviors:**
- Be respectful and inclusive in all interactions
- Provide constructive, helpful feedback
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy toward other community members
- Use professional language

**Unacceptable Behaviors:**
- Harassment, discrimination, or offensive comments
- Trolling, insulting, or derogatory remarks
- Personal or political attacks
- Publishing others' private information without permission
- Any unprofessional conduct

### Enforcement

Violations will result in:
1. **First Offense**: Written warning
2. **Second Offense**: Temporary ban from project
3. **Serious/Repeated**: Permanent ban from project

Report violations to: tonynguyen.nvt@gmail.com

---

## Questions and Support

- **General Questions**: [GitHub Discussions](https://github.com/tonynguyennvt/cursor-rules-awesome/discussions)
- **Bug Reports**: [GitHub Issues](https://github.com/tonynguyennvt/cursor-rules-awesome/issues)
- **Security Issues**: Email tonynguyen.nvt@gmail.com (do not open public issues)
- **Other Inquiries**: tonynguyen.nvt@gmail.com

---

## Thank You

Every contribution, regardless of size, helps improve software development standards for developers worldwide.

Together, we are elevating engineering excellence globally.

---

**Last Updated:** 2025-10-20  
**Version:** 1.0
