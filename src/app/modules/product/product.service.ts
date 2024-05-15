import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../shared/models/product.model';

@Injectable()
export class ProductService {
  constructor() {}

  getAllProducts(): Observable<Product[]> {
    return of(mockProducts);
  }
}

const mockProducts = [
  {
    id: 'portal',
    name: 'Axon Ivy Portal',
    description:
      'The Axon Ivy Portal is the single point of contact for any end-user using the Axon Ivy platform.',
  },

  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'adobe-acrobat-connector',
    name: 'Adobe Acrobat Connector',
    description:
      'Use this connector to send, sign, track, and manage signature processes in Axon Ivy.',
  },

  {
    id: 'docusign-connector',
    name: 'DocuSign',
    description:
      'DocuSign allows organizations to sign any document electronically on different systems.',
  },
];
