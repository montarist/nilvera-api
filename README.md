# Unofficial Logo İşbaşı API Client

## Overview

Unofficial library for Logo İşbaşı API platform, providing comprehensive access to Logo's business management services.

## Key Features

- Full TypeScript support with type definitions
- Comprehensive API coverage for some Logo İşbaşı endpoints
- Built-in authentication and session management
- Service-oriented architecture
- Error handling and retry mechanisms

## Installation

```
npm install @montarist/logo-isbasi-api
```

## Quick Start

```
import { LogoApiClient } from '@montarist/logo-isbasi-api';

const client = new LogoApiClient({
    apiKey: 'your-api-key',
    username: 'your-username',
    password: 'your-password',
    baseUrl: 'https:api.logo.com.tr'
});

await client.initialize();
```

## Core Services

### Payment Service

Handles all payment-related operations:

- Bank integrations
- Payment transactions
- Reconciliation

```
// Get bank accounts
const accounts = await client.payments.getBankAccounts();

// Process payment
await client.payments.processTransaction({...});
```

### Firm Service

Manages company and firm operations:

- Firm registration
- Address management
- Transaction history

```
// Get firm details
const firmDetails = await client.firm.getFirmDetails(firmId);

// Update firm
await client.firm.updateFirm({...});
```

### E-Invoice Service

Complete e-invoice management:

- Invoice creation
- Invoice validation
- Archive operations

```
// Create e-invoice
await client.einvoices.createInvoice({...});

// Get invoice status
const status = await client.einvoices.getStatus(invoiceId);
```

### Master Data Service

Core data management:

- Bank branches
- Country codes
- Currency rates

```
// Get bank branches
const branches = await client.master.getBankBranches();

// Get currency rates
const rates = await client.master.getCurrencyRates();
```

## Error Handling

```
try {
    await client.payments.processTransaction({...});
} catch (error) {
    if (error.code === 'AUTH_ERROR') {
        // Handle authentication errors
    }
    // Handle other errors
}
```

## Development Setup

```
# Install dependencies
npm install

# Run tests
npm run test

# Build project
npm run build

# Lint code
npm run lint

# Format code
npm run format
```

## Project Structure

```
/src
   /constants        - API endpoints and type definitions
   /services        - Service implementations
   LogoApiClient.ts - Main client class
```

## Testing

- Unit tests with Jest
- Integration tests
- Mock API responses

```
# Run all tests
npm test

# Run specific test suite
npm test -- -t "PaymentService"

# Run with coverage
npm test -- --coverage
```

## API Documentation

For detailed API documentation, visit:

- [Logo İşbaşı API Docs](https:api-docs.logo.com.tr)

## Contributing

1.  Fork the repository
2.  Create feature branch (`git checkout -b feature/amazing-feature`)
3.  Commit changes (`git commit -m 'Add amazing feature'`)
4.  Push to branch (`git push origin feature/amazing-feature`)
5.  Open a Pull Request

## Support

- GitHub Issues
- Stack Overflow tag:`logo-isbasi`

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Authors

- Montarist Team
