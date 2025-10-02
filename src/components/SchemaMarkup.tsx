import { SEOConfig } from '../data/seoConfig'

interface SchemaMarkupProps {
  seoConfig: SEOConfig
  toolName: string
  toolDescription: string
}

export default function SchemaMarkup({ seoConfig, toolName, toolDescription }: SchemaMarkupProps) {
  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": seoConfig.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  // HowTo Schema (for calculators with steps)
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to use ${toolName}`,
    "description": toolDescription,
    "totalTime": "PT2M",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Height and weight (for BMI calculator)"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": toolName
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Enter your information",
        "text": "Input your required information in the calculator form above",
        "url": window.location.href
      },
      {
        "@type": "HowToStep", 
        "name": "Click Calculate",
        "text": "Click the calculate button to get your results",
        "url": window.location.href
      },
      {
        "@type": "HowToStep",
        "name": "Review Results",
        "text": "Review your calculated results and any additional information provided",
        "url": window.location.href
      }
    ]
  }

  // Software Application Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": toolName,
    "description": toolDescription,
    "url": window.location.href,
    "applicationCategory": "CalculatorApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "Daily Tools by AIGPT"
    }
  }

  return (
    <>
      {/* FAQ Schema */}
      {seoConfig.faqs && seoConfig.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      
      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      
      {/* Software Application Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  )
}
