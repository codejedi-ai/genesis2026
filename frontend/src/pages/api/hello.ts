// ICE.js API Route - src/pages/api/hello.ts
// This creates an endpoint at /api/hello

export default function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (req.method === 'GET') {
      // Handle GET /api/hello with multiple format support
      const acceptHeader = req.headers.accept || req.headers.Accept || 'application/json';
      const format = req.query.format || req.query.f || 'json';
      
      const responseData = {
        message: 'Hello from ICE.js API!',
        method: 'GET',
        timestamp: new Date().toISOString(),
        data: {
          text: 'hello world response'
        }
      };

      sendResponse(res, responseData, format, acceptHeader);
    } else if (req.method === 'POST') {
      // Handle POST /api/hello (JSON only)
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({
        message: 'Hello from ICE.js API!',
        method: 'POST',
        timestamp: new Date().toISOString(),
        data: {
          text: 'hello world response',
          receivedData: req.body
        }
      });
    } else {
      // Method not allowed
      res.status(405).json({
        error: 'Method not allowed',
        allowedMethods: ['GET', 'POST']
      });
    }
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

function sendResponse(res: any, data: any, format: string, acceptHeader: string, statusCode: number = 200) {
  res.status(statusCode);
  
  // Determine response format based on query parameter or Accept header
  if (format === 'xml' || acceptHeader.includes('application/xml') || acceptHeader.includes('text/xml')) {
    res.setHeader('Content-Type', 'application/xml');
    res.send(jsonToXml(data));
  } else if (format === 'text' || acceptHeader.includes('text/plain')) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(formatAsText(data));
  } else if (format === 'html' || acceptHeader.includes('text/html')) {
    res.setHeader('Content-Type', 'text/html');
    res.send(formatAsHtml(data));
  } else if (format === 'csv' || acceptHeader.includes('text/csv')) {
    res.setHeader('Content-Type', 'text/csv');
    res.send(formatAsCsv(data));
  } else {
    // Default to JSON
    res.setHeader('Content-Type', 'application/json');
    res.json(data);
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

function formatAsText(obj: any): string {
  let text = '';
  function objToText(obj: any, indent: string = ''): string {
    let text = '';
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'object' && value !== null) {
        text += `${indent}${key}:\n`;
        text += objToText(value, indent + '  ');
      } else {
        text += `${indent}${key}: ${value}\n`;
      }
    }
    return text;
  }
  return objToText(obj);
}

function formatAsHtml(obj: any): string {
  let html = '<!DOCTYPE html><html><head><title>API Response</title></head><body>';
  html += '<h1>API Response</h1>';
  html += '<pre>' + JSON.stringify(obj, null, 2) + '</pre>';
  html += '</body></html>';
  return html;
}

function formatAsCsv(obj: any): string {
  // Simple CSV conversion for flat objects
  const headers = Object.keys(obj);
  const values = Object.values(obj);
  return headers.join(',') + '\n' + values.join(',');
}
