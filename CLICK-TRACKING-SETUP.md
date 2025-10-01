# 📊 Click Tracking Setup Guide

## Free Click Tracking with Google Sheets + Apps Script

This guide will help you set up free click tracking for your Daily Tools website using Google Sheets and Google Apps Script.

---

## 🎯 What Will Be Tracked

1. **Affiliate Link Clicks** (Amazon + HeyGen)
   - Link URL
   - Link text
   - Timestamp
   - Page where clicked

2. **Tool Usage**
   - Tool name
   - Timestamp
   - Page URL

---

## 📋 Step-by-Step Setup Instructions

### **Step 1: Create Google Sheet**

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ Blank"** to create a new spreadsheet
3. Name it: **"Daily Tools Click Tracking"**
4. In the first row (headers), add these columns:

   | A | B | C | D | E | F |
   |---|---|---|---|---|---|
   | Timestamp | Link URL | Link Text | Tool Name | Page URL | User Agent |

### **Step 2: Add Apps Script**

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete the default `myFunction()` code
3. Copy the entire code from `google-apps-script-backend.gs` file
4. Paste it into the Apps Script editor
5. Click **💾 Save** (or press Ctrl+S)
6. Give your project a name: **"Click Tracking API"**

### **Step 3: Deploy as Web App**

1. In Apps Script editor, click **Deploy > New deployment**
2. Click the **⚙️ gear icon** next to "Select type"
3. Choose **"Web app"**
4. Configure settings:
   - **Description**: "Click Tracking Endpoint"
   - **Execute as**: **Me** (your email address)
   - **Who has access**: **Anyone**
5. Click **Deploy**
6. **Important**: Copy the **Web App URL** (it looks like: `https://script.google.com/macros/s/ABC.../exec`)
7. Click **Done**

### **Step 4: Update Your Website**

1. Open your website's `index.html` file
2. Find this line (around line 46):
   ```javascript
   const TRACKING_URL = 'YOUR_WEB_APP_URL';
   ```
3. Replace `YOUR_WEB_APP_URL` with the Web App URL you copied in Step 3:
   ```javascript
   const TRACKING_URL = 'https://script.google.com/macros/s/ABC.../exec';
   ```
4. Save the file
5. Commit and deploy your website

### **Step 5: Test the Tracking**

1. Open your live website
2. Click on any **Amazon affiliate link** or **HeyGen button**
3. Go back to your Google Sheet
4. **Refresh the page** - You should see a new row with click data!

---

## 📊 View Your Analytics

### **Real-Time Data**
Just open your Google Sheet anytime to see all tracked clicks in real-time.

### **Optional: Analytics Summary**
Run this function in Apps Script to get a summary:
1. In Apps Script editor, select **`getAnalyticsSummary`** from the function dropdown
2. Click **▶️ Run**
3. Check the **Execution log** for the summary

### **Data Format in Google Sheet:**

| Timestamp | Link URL | Link Text | Tool Name | Page URL | User Agent |
|-----------|----------|-----------|-----------|----------|------------|
| 2025-01-10T10:30:45.123Z | https://amzn.to/4mHruYs | Buy on Amazon | affiliate | https://tools.aigpt.co.in | Mozilla/5.0... |
| 2025-01-10T10:31:12.456Z | https://www.heygen.com/... | 🎥 Try HeyGen Free | affiliate | https://tools.aigpt.co.in | Mozilla/5.0... |

---

## 🔧 Troubleshooting

### **Clicks not being tracked?**

1. **Check Web App URL**: Make sure you replaced `YOUR_WEB_APP_URL` in `index.html`
2. **Check deployment**: Ensure the Apps Script is deployed as **Web app** with access set to **Anyone**
3. **Check console**: Open browser DevTools (F12) > Console tab for any error messages
4. **Test manually**: Visit this URL in your browser:
   ```
   YOUR_WEB_APP_URL?url=test&text=test&tool=test
   ```
   You should see "OK" and a new row in your sheet

### **Permission errors?**

1. When you first run the Apps Script, it will ask for permissions
2. Click **Review Permissions**
3. Select your Google account
4. Click **Advanced** > **Go to Click Tracking API (unsafe)**
5. Click **Allow**

---

## 💡 Advanced Features

### **Clean Old Data**
To prevent your sheet from getting too large, run the `cleanOldData()` function periodically:
1. In Apps Script, select **`cleanOldData`** from dropdown
2. Click **▶️ Run**
3. This keeps only the last 1000 rows

### **Automated Cleanup**
Set up a time-based trigger to auto-clean old data:
1. In Apps Script, click **⏰ Triggers** (left sidebar)
2. Click **+ Add Trigger**
3. Choose function: **cleanOldData**
4. Select event source: **Time-driven**
5. Select time interval: **Week timer** (runs weekly)
6. Click **Save**

### **Export Data**
You can export your tracking data anytime:
1. In Google Sheets, go to **File > Download**
2. Choose format: **CSV**, **Excel**, or **PDF**

---

## 📈 What You Can Learn

From this tracking data, you can analyze:

- **Most clicked affiliate links** (Amazon products vs HeyGen)
- **Best performing products** (which Amazon products get most clicks)
- **Tool popularity** (which calculators are most used)
- **User behavior patterns** (time of day, day of week)
- **Traffic sources** (referrer URLs)
- **Device usage** (mobile vs desktop from User Agent)

---

## 🔒 Privacy

- No personal data is collected
- Only click events and timestamps
- Complies with basic privacy standards
- Users can see data collection in browser DevTools

---

## 💰 Cost

**100% FREE** - Google provides:
- Google Sheets: Free up to 5 million cells
- Apps Script: Free up to 20,000 executions/day
- More than enough for most websites!

---

## 📚 Files Reference

1. **`index.html`** - Contains the inline tracking script
2. **`google-apps-script-backend.gs`** - Backend code for Google Apps Script
3. **`public/click-tracking-script.js`** - Standalone version of tracking script
4. **`src/utils/clickTracking.ts`** - TypeScript version for future use

---

## ✅ Checklist

- [ ] Created Google Sheet with correct headers
- [ ] Added Apps Script code
- [ ] Deployed as Web App with "Anyone" access
- [ ] Copied Web App URL
- [ ] Updated `TRACKING_URL` in `index.html`
- [ ] Deployed website with updated code
- [ ] Tested by clicking an affiliate link
- [ ] Verified data appears in Google Sheet

---

**Need help?** Contact support or check the Google Apps Script documentation.

**Pro Tip**: Bookmark your Google Sheet for quick access to your analytics!
