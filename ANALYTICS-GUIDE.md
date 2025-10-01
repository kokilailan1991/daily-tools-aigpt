# 📊 Analytics Guide - Understanding Your Click Data

## 🎯 What Your Google Sheet Shows

Your Google Sheet captures every click with these columns:

| Column | Data | Example |
|--------|------|---------|
| **Timestamp** | When the click happened | 2025-10-01T12:30:45.123Z |
| **Link URL** | What was clicked | https://amzn.to/4mHruYs |
| **Link Text** | Button/link text | "Buy on Amazon" |
| **Tool Name** | Type of click | "affiliate" or tool name |
| **Page URL** | Where user clicked from | https://tools.aigpt.co.in/ |
| **User Agent** | User's browser/device | Chrome/Windows |

---

## 🔍 How to Identify Different Clicks

### **1. Amazon Affiliate Clicks**
Look for rows where:
- **Tool Name** = `affiliate`
- **Link URL** contains `amzn.to`
- **Link Text** = "Buy on Amazon"

**Example:**
```
Timestamp: 2025-10-01 12:30:45
Link URL: https://amzn.to/4mHruYs
Link Text: Buy on Amazon
Tool Name: affiliate
```
This means someone clicked on the **Haier AC** Amazon link.

---

### **2. HeyGen Affiliate Clicks**
Look for rows where:
- **Tool Name** = `affiliate`
- **Link URL** contains `heygen.com`
- **Link Text** = "🎥 Try HeyGen Free"

**Example:**
```
Timestamp: 2025-10-01 12:31:12
Link URL: https://www.heygen.com/?sid=rewardful&via=ilanthiraiyan
Link Text: 🎥 Try HeyGen Free
Tool Name: affiliate
```
This means someone clicked on the **HeyGen** button.

---

### **3. Tool Usage Clicks**
Look for rows where:
- **Tool Name** = actual tool name (not "affiliate")
- **Link URL** = tool page URL
- **Link Text** = tool name

**Example:**
```
Timestamp: 2025-10-01 12:32:05
Link URL: https://tools.aigpt.co.in/#/tool/bmi-calculator
Link Text: BMI Calculator
Tool Name: BMI Calculator
```
This means someone opened the **BMI Calculator** tool.

---

## 📈 Quick Analysis Tips

### **Count Amazon Clicks**
In Google Sheets, use this formula in an empty cell:
```
=COUNTIF(B:B,"*amzn.to*")
```
This counts all rows with Amazon links.

### **Count HeyGen Clicks**
```
=COUNTIF(B:B,"*heygen.com*")
```

### **Count All Affiliate Clicks**
```
=COUNTIF(D:D,"affiliate")
```

### **Most Popular Tool**
```
=MODE(D:D)
```
or create a pivot table to see all tools ranked.

### **Clicks Today**
```
=COUNTIF(A:A,">="&TODAY())
```

---

## 🎨 Create a Dashboard (Optional)

### **Method 1: Simple Summary Sheet**
1. Create a new sheet tab called "Dashboard"
2. Add these formulas:

```
Total Clicks: =COUNTA(Sheet1!A:A)-1
Amazon Clicks: =COUNTIF(Sheet1!B:B,"*amzn.to*")
HeyGen Clicks: =COUNTIF(Sheet1!B:B,"*heygen.com*")
Tool Clicks: =COUNTIF(Sheet1!D:D,"<>affiliate")-COUNTIF(Sheet1!D:D,"")
```

### **Method 2: Pivot Table**
1. Select all data in your tracking sheet
2. Go to **Insert > Pivot table**
3. Add **Tool Name** to Rows
4. Add **COUNTA of Timestamp** to Values
5. This shows you which tools/links are most clicked

---

## 💡 What Each Row Tells You

| If Tool Name = | Then User Clicked... |
|----------------|----------------------|
| `affiliate` + Link has `amzn.to` | Amazon product (check Link URL to see which one) |
| `affiliate` + Link has `heygen.com` | HeyGen promotion button |
| Tool name (e.g., "BMI Calculator") | That specific calculator tool |

---

## 🎯 Action Items Based on Data

### **High Amazon Clicks?**
- That product is popular! Consider adding more similar products
- Update product image or description to increase conversions

### **High HeyGen Clicks?**
- Your audience likes video tools
- Consider adding more video/creative AI tools

### **Low Affiliate Clicks?**
- Reposition the buttons/links
- Make them more visible
- Add urgency (limited time offer)

### **Popular Tools?**
- Promote those tools more on homepage
- Create blog posts about popular tools
- Add premium features to popular tools

---

## 🔄 Regular Checks

**Daily**: Check total clicks and identify trends

**Weekly**: Analyze which affiliates are performing best

**Monthly**: Create summary report and adjust strategy

---

## 🛠️ Example Analysis

If your sheet shows:
```
Row 1: amzn.to/4mHruYs | Buy on Amazon | affiliate → AC product clicked
Row 2: amzn.to/4mHruYs | Buy on Amazon | affiliate → AC clicked again
Row 3: heygen.com/... | Try HeyGen Free | affiliate → HeyGen clicked
Row 4: #/tool/bmi | BMI Calculator | BMI Calculator → Tool used
Row 5: amzn.to/4o2Eucy | Buy on Amazon | affiliate → Sofa clicked
```

**Analysis:**
- 3 Amazon clicks (60% of affiliate clicks)
- 1 HeyGen click (20% of affiliate clicks)
- 1 tool usage (20% of total)
- AC is more popular than Sofa (2 vs 1 clicks)

---

**Your tracking is working perfectly!** 🎉

Just open your Google Sheet anytime to see real-time data about what your users are clicking!
