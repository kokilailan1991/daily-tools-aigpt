/**
 * Google Apps Script Backend for Click Tracking
 * 
 * SETUP INSTRUCTIONS:
 * 
 * Step 1: Create Google Sheet
 * - Go to https://sheets.google.com
 * - Create a new spreadsheet named "Daily Tools Click Tracking"
 * - In first row, add headers: Timestamp | Link URL | Link Text | Tool Name | Page URL | User Agent
 * 
 * Step 2: Add This Script
 * - In your Google Sheet, go to Extensions > Apps Script
 * - Delete default code and paste this entire script
 * - Save the script (Ctrl+S)
 * 
 * Step 3: Deploy as Web App
 * - Click "Deploy" > "New deployment"
 * - Choose "Web app" as deployment type
 * - Settings:
 *   - Execute as: Me (your email)
 *   - Who has access: Anyone
 * - Click "Deploy"
 * - Copy the Web App URL
 * 
 * Step 4: Update Your Website
 * - Replace "YOUR_WEB_APP_URL" in the tracking script with the URL you copied
 * - Deploy your website
 * 
 * Step 5: Test
 * - Click on any affiliate link on your website
 * - Check your Google Sheet - a new row should appear with the click data
 */

// Main function to handle GET and POST requests
function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Handle different request types
    let params = {};
    
    if (e && e.parameter) {
      // GET request parameters
      params = e.parameter;
    } else if (e && e.postData && e.postData.contents) {
      // POST request body
      try {
        const postData = e.postData.contents;
        const pairs = postData.split('&');
        pairs.forEach(pair => {
          const [key, value] = pair.split('=');
          params[decodeURIComponent(key)] = decodeURIComponent(value);
        });
      } catch (parseError) {
        Logger.log('Parse error: ' + parseError.toString());
        params = {};
      }
    }
    
    // Extract parameters with defaults
    const url = params.url || '';
    const text = params.text || '';
    const tool = params.tool || '';
    const page = params.page || '';
    const timestamp = params.timestamp || new Date().toISOString();
    const userAgent = params.userAgent || 'Unknown';
    
    // Append row to sheet
    sheet.appendRow([
      timestamp,
      url,
      text,
      tool,
      page,
      userAgent
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput('OK')
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    // Log error for debugging
    Logger.log('Error: ' + error.toString());
    Logger.log('Event object: ' + JSON.stringify(e));
    
    // Return error response
    return ContentService
      .createTextOutput('Error: ' + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

/**
 * OPTIONAL: Function to get analytics summary
 * You can run this manually to get a summary of tracked data
 */
function getAnalyticsSummary() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  // Skip header row
  const rows = data.slice(1);
  
  // Count affiliate clicks
  const affiliateClicks = rows.filter(row => row[3] === 'affiliate').length;
  
  // Count tool usage
  const toolUsage = {};
  rows.forEach(row => {
    const tool = row[3];
    if (tool && tool !== 'affiliate') {
      toolUsage[tool] = (toolUsage[tool] || 0) + 1;
    }
  });
  
  Logger.log('Total Clicks: ' + rows.length);
  Logger.log('Affiliate Clicks: ' + affiliateClicks);
  Logger.log('Tool Usage: ' + JSON.stringify(toolUsage));
  
  return {
    totalClicks: rows.length,
    affiliateClicks: affiliateClicks,
    toolUsage: toolUsage
  };
}

/**
 * OPTIONAL: Function to clear old data (keep last 1000 rows)
 * Run this periodically to prevent sheet from getting too large
 */
function cleanOldData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const numRows = sheet.getLastRow();
  const keepRows = 1000;
  
  if (numRows > keepRows + 1) { // +1 for header
    sheet.deleteRows(2, numRows - keepRows - 1);
    Logger.log('Deleted ' + (numRows - keepRows - 1) + ' old rows');
  } else {
    Logger.log('No rows to delete');
  }
}
