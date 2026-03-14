// Netlify Function - netlify/functions/hello.ts
// TypeScript version without CORS (same domain)

import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

interface ResponseData {
  message: string;
  method: string;
  timestamp: string;
  data: {
    text: string;
    receivedData?: any;
  };
}

interface ErrorResponse {
  error: string;
  allowedMethods?: string[];
  message?: string;
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const headers = {
    'Content-Type': 'application/json'
  };

  try {
    const { httpMethod, queryStringParameters, body } = event;
    const format = queryStringParameters?.format || 'json';
    const acceptHeader = event.headers?.accept || 'application/json';

    const responseData: ResponseData = {
      message: 'Hello from Netlify Functions!',
      method: httpMethod,
      timestamp: new Date().toISOString(),
      data: {
        text: 'hello world response',
        ...(httpMethod === 'POST' && { receivedData: body ? JSON.parse(body) : null })
      }
    };

    if (httpMethod === 'GET') {
      return sendResponse(responseData, format, acceptHeader, headers);
    } else if (httpMethod === 'POST') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(responseData)
      };
    } else {
      const errorResponse: ErrorResponse = {
        error: 'Method not allowed',
        allowedMethods: ['GET', 'POST']
      };
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify(errorResponse)
      };
    }
  } catch (error) {
    const errorResponse: ErrorResponse = {
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    };
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify(errorResponse)
    };
  }
};

function sendResponse(data: ResponseData, format: string, acceptHeader: string, headers: Record<string, string>) {
  const baseHeaders = { ...headers };

  if (format === 'xml' || acceptHeader.includes('application/xml')) {
    baseHeaders['Content-Type'] = 'application/xml';
    return {
      statusCode: 200,
      headers: baseHeaders,
      body: jsonToXml(data)
    };
  } else if (format === 'text' || acceptHeader.includes('text/plain')) {
    baseHeaders['Content-Type'] = 'text/plain';
    return {
      statusCode: 200,
      headers: baseHeaders,
      body: formatAsText(data)
    };
  } else if (format === 'html' || acceptHeader.includes('text/html')) {
    baseHeaders['Content-Type'] = 'text/html';
    return {
      statusCode: 200,
      headers: baseHeaders,
      body: formatAsHtml(data)
    };
  } else if (format === 'csv' || acceptHeader.includes('text/csv')) {
    baseHeaders['Content-Type'] = 'text/csv';
    return {
      statusCode: 200,
      headers: baseHeaders,
      body: formatAsCsv(data)
    };
  } else {
    // Default JSON
    return {
      statusCode: 200,
      headers: baseHeaders,
      body: JSON.stringify(data)
    };
  }
}

function jsonToXml(obj: any, rootName: string = 'response'): string {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<${rootName}>`;
  
  function objToXml(obj: any, parentKey?: string): string {
    let xml = '';
    for (const [key, value] of Object.entries(obj)) {
      const xmlKey = parentKey ? `${parentKey}_${key}` : key;
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        xml += `<${xmlKey}>${objToXml(value)}</${xmlKey}>`;
      } else if (Array.isArray(value)) {
        xml += `<${xmlKey}>`;
        value.forEach((item, index) => {
          xml += `<item_${index}>${objToXml(item)}</item_${index}>`;
        });
        xml += `</${xmlKey}>`;
      } else {
        xml += `<${xmlKey}>${value}</${xmlKey}>`;
      }
    }
    return xml;
  }
  
  xml += objToXml(obj);
  xml += `</${rootName}>`;
  return xml;
}

function formatAsText(obj: any, indent: string = ''): string {
  let text = '';
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null) {
      text += `${indent}${key}:\n`;
      text += formatAsText(value, indent + '  ');
    } else {
      text += `${indent}${key}: ${value}\n`;
    }
  }
  return text;
}

function formatAsHtml(obj: any): string {
  let html = '<!DOCTYPE html><html><head><title>API Response</title></head><body>';
  html += '<h1>API Response</h1>';
  html += '<pre>' + JSON.stringify(obj, null, 2) + '</pre>';
  html += '</body></html>';
  return html;
}

function formatAsCsv(obj: any): string {
  const headers = Object.keys(obj);
  const values = Object.values(obj);
  return headers.join(',') + '\n' + values.join(',');
}

export { handler };
