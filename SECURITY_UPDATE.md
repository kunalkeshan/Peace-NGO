# Next.js Security Update - December 2025

## Summary

This project has been updated to address critical security vulnerabilities in Next.js announced on December 11, 2025.

## Vulnerabilities Addressed

### 1. CVE-2025-55184 (High Severity) - Denial of Service
A specifically crafted HTTP request could cause an infinite loop that hangs the server process and prevents future HTTP requests from being served.

### 2. CVE-2025-67779 (High Severity) - Complete DoS Fix
This is the complete fix for CVE-2025-55184, as the initial fix was incomplete.

### 3. CVE-2025-55183 (Medium Severity) - Source Code Exposure
A specifically crafted HTTP request could cause a Server Function to return the compiled source code of other Server Functions, potentially revealing business logic and secrets.

## Impact on This Project

This project uses Next.js App Router with React Server Components, making it affected by these vulnerabilities. The update was required to protect against:
- Server denial of service attacks
- Potential exposure of server-side business logic and secrets

## Changes Made

### Version Updates

| Package | Before | After | Reason |
|---------|--------|-------|--------|
| next | `latest` | `15.5.9` | Security patch for CVE-2025-55183, CVE-2025-55184, CVE-2025-67779 |
| react | `latest` | `^18.3.1` | Compatibility with Next.js 15.5.x |
| react-dom | `latest` | `^18.3.1` | Compatibility with Next.js 15.5.x |
| styled-components | `5.2` | `^6.1.15` | Required by updated Sanity UI packages |
| styled-jsx | (none) | `^5.1.7` | Required by Next.js 15.5.x |
| tailwindcss | `latest` | `^3.4.17` | Tailwind v4 has breaking changes |
| autoprefixer | `latest` | `^10.4.20` | Compatible with Tailwind CSS v3 |
| postcss | `latest` | `^8.4.49` | Compatible with Tailwind CSS v3 |
| eslint-config-next | `latest` | `15.5.9` | Match Next.js version |
| @types/react | `latest` | `^18` | Match React version |
| @types/react-dom | `latest` | `^18` | Match React-DOM version |

### Code Changes for Next.js 15 Compatibility

Next.js 15 introduced breaking changes that required code updates:

#### 1. Async `params` and `searchParams` (app/(main)/blogs/[slug]/page.tsx)
```typescript
// Before
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// After
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Usage
export default async function Blog({ params }: Props) {
  const resolvedParams = await params;
  const post = await sanityFetch<BlogPost>({ query: postQuery, params: resolvedParams });
  // ...
}
```

#### 2. Async `draftMode()` (sanity/lib/sanityFetch.ts)
```typescript
// Before
const isDraftMode = draftMode().isEnabled;

// After
const draft = await draftMode();
const isDraftMode = draft.isEnabled;
```

## Version Selection Rationale

We chose Next.js **15.5.9** (instead of 16.0.10) for the following reasons:

1. **Minimal Disruption**: Staying on the 15.x line minimizes breaking changes
2. **Dependency Compatibility**: 
   - `next-sanity-image@6.2.0` (latest) doesn't support Next.js 16 yet
   - `next-sanity` required upgrade to v11+ for Next.js 16 support
3. **Security Coverage**: Next.js 15.5.9 includes patches for all three CVEs
4. **Stability**: Following the security advisory's recommendation to upgrade within your current release line

## Verification

✅ Build compiles successfully  
✅ TypeScript types are correct  
✅ No Next.js-related vulnerabilities in `npm audit`  
✅ All security patches applied as per the official advisory  

## References

- [Next.js Security Update: December 11, 2025](https://nextjs.org/blog/security-update-2025-12-11)
- [CVE-2025-67779 (Complete DoS Fix)](https://www.cve.org/CVERecord?id=CVE-2025-67779)
- [CVE-2025-55184 (DoS)](https://www.cve.org/CVERecord?id=CVE-2025-55184)
- [CVE-2025-55183 (Source Code Exposure)](https://www.cve.org/CVERecord?id=CVE-2025-55183)
- [React Blog: Denial of Service and Source Code Exposure in React Server Components](https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components)

## Recommendations

1. **Do not revert to floating versions**: Keep `next`, `react`, and `react-dom` pinned to specific versions to prevent accidental downgrades or incompatible upgrades.

2. **Monitor for updates**: When upgrading dependencies in the future, check for Next.js compatibility first.

3. **Environment Variables**: Ensure sensitive data (API keys, tokens) are stored in environment variables, not hardcoded in source files, to minimize risk if source code exposure vulnerabilities are discovered in the future.

4. **Regular Security Audits**: Run `npm audit` regularly to identify and address security vulnerabilities.

## Testing

To verify the security patches are in place:

```bash
# Check Next.js version
npm list next

# Should show: next@15.5.9

# Run security audit
npm audit

# Should show no Next.js-related vulnerabilities
```
