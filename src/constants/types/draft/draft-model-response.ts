export interface DraftModelResponse {
    InvoiceInfo: {
      UUID: string;
      TemplateUUID: string;
      TemplateBase64String: string;
      InvoiceType: string;
      InvoiceSerieOrNumber: string;
      IssueDate: string;
      CurrencyCode: string;
      ExchangeRate: number;
      InvoiceProfile: string;
      DespatchDocumentReference: Array<{ IssueDate: string; Value: string }>;
      OrderReference: { IssueDate: string; Value: string };
      OrderReferenceDocument: {
        ID: string;
        IssueDate: string;
        DocumentType: string;
        DocumentTypeCode: string;
        DocumentDescription: string;
        Attachment: {
          Base64Data: string;
          MimeCode: string;
          FileName: string;
        };
      };
      AdditionalDocumentReferences: Array<{
        ID: string;
        IssueDate: string;
        DocumentType: string;
        DocumentTypeCode: string;
        DocumentDescription: string;
        Attachment: {
          Base64Data: string;
          MimeCode: string;
          FileName: string;
        };
      }>;
      TaxExemptionReasonInfo: {
        KDVExemptionReasonCode: string;
        OTVExemptionReasonCode: string;
        AccommodationTaxExemptionReasonCode: string;
      };
      PaymentTermsInfo: { Percent: number; Amount: number; Note: string };
      PaymentMeansInfo: {
        Code: string;
        ChannelCode: string;
        DueDate: string;
        PayeeFinancialAccountID: string;
        Note: string;
      };
      OKCInfo: {
        ID: string;
        IssueDate: string;
        Time: string;
        ZNo: string;
        EndPointID: string;
        DocumentDescription: string;
      };
      ESUReportInfo: { ID: string; IssueDate: string };
      ReturnInvoiceInfo: Array<{ InvoiceNumber: string; IssueDate: string }>;
      AccountingCost: string;
      InvoicePeriod: {
        StartDate: string;
        StartTime: string;
        EndDate: string;
        EndTime: string;
        DurationMeasureValue: number;
        Description: string;
      };
      SGKInfo: { RegisterName: string; DocumentNumber: string; RegisterCode: string };
      Expenses: Array<{ ExpenseType: string; Percent: number; Amount: number }>;
      LineExtensionAmount: number;
      GeneralKDV1Total: number;
      GeneralKDV8Total: number;
      GeneralKDV18Total: number;
      GeneralKDV10Total: number;
      GeneralKDV20Total: number;
      GeneralAllowanceTotal: number;
      PayableAmount: number;
      KdvTotal: number;
    };
    CompanyInfo: {
      TaxNumber: string;
      Name: string;
      TaxOffice: string;
      PartyIdentifications: Array<{ SchemeID: string; Value: string }>;
      AgentPartyIdentifications: Array<{ SchemeID: string; Value: string }>;
      Address: string;
      District: string;
      City: string;
      Country: string;
      PostalCode: string;
      Phone: string;
      Fax: string;
      Mail: string;
      WebSite: string;
    };
    CustomerInfo: {
      TaxNumber: string;
      Name: string;
      TaxOffice: string;
      PartyIdentifications: Array<{ SchemeID: string; Value: string }>;
      AgentPartyIdentifications: Array<{ SchemeID: string; Value: string }>;
      Address: string;
      District: string;
      City: string;
      Country: string;
      PostalCode: string;
      Phone: string;
      Fax: string;
      Mail: string;
      WebSite: string;
    };
    BuyerCustomerInfo: {
      TaxNumber: string;
      Name: string;
      TaxOffice: string;
      PartyIdentifications: Array<{ SchemeID: string; Value: string }>;
      AgentPartyIdentifications: Array<{ SchemeID: string; Value: string }>;
      Address: string;
      District: string;
      City: string;
      Country: string;
      PostalCode: string;
      Phone: string;
      Fax: string;
      Mail: string;
      WebSite: string;
    };
    ExportCustomerInfo: {
      TaxNumber: string;
      LegalRegistrationName: string;
      PersonName: string;
      PersonSurName: string;
      Address: string;
      District: string;
      City: string;
      Country: string;
      PostalCode: string;
      Phone: string;
      Fax: string;
      Mail: string;
      WebSite: string;
    };
    TaxFreeInfo: {
      TouristInfo: {
        Name: string;
        SurName: string;
        CountryCode: string;
        PassportNo: string;
        PassportDate: string;
        AddressInfo: {
          Address: string;
          District: string;
          City: string;
          Country: string;
          PostalCode: string;
          Phone: string;
          Fax: string;
          Mail: string;
          WebSite: string;
        };
        FinancialAccountInfo: {
          BankName: string;
          BranchName: string;
          ID: string;
          CurrencyCode: string;
          PaymentNote: string;
        };
      };
      TaxRepresentativeInfo: {
        RegisterNumber: string;
        Alias: string;
        Address: {
          Address: string;
          District: string;
          City: string;
          Country: string;
          PostalCode: string;
          Phone: string;
          Fax: string;
          Mail: string;
          WebSite: string;
        };
      };
    };
    InvoiceLines: Array<{
      Index: string;
      SellerCode: string;
      BuyerCode: string;
      Name: string;
      Description: string;
      Quantity: number;
      UnitType: string;
      Price: number;
      AllowanceTotal: number;
      KDVPercent: number;
      KDVTotal: number;
      Taxes: Array<{
        TaxCode: string;
        Total: number;
        Percent: number;
        ReasonCode: string;
        ReasonDesc: string;
      }>;
      DeliveryInfo: {
        GTIPNo: string;
        DeliveryTermCode: string;
        TransportModeCode: string;
        PackageBrandName: string;
        ProductTraceID: string;
        PackageID: string;
        PackageQuantity: number;
        PackageTypeCode: string;
        DeliveryAddress: {
          Address: string;
          District: string;
          City: string;
          Country: string;
          PostalCode: string;
          Phone: string;
          Fax: string;
          Mail: string;
          WebSite: string;
        };
      };
      ManufacturerCode: string;
      BrandName: string;
      ModelName: string;
      Note: string;
      SerialID: string;
      OzelMatrahReason: string;
      OzelMatrahTotal: number;
      VatAmountWithoutTevkifat: number;
      AdditionalItemIdentification: {
        TagNumber: string;
        OwnerName: string;
        OwnerTaxNumber: string;
      };
    }>;
    Notes: Array<string>;
  }
  