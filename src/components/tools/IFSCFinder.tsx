import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function IFSCFinder() {
  const [ifscCode, setIfscCode] = useState('')
  const [result, setResult] = useState<{
    ifsc: string
    bank: string
    branch: string
    address: string
    city: string
    state: string
    district: string
    contact: string
  } | null>(null)
  const [loading, setLoading] = useState(false)

  // Mock IFSC data for demonstration
  const mockIFSCData: { [key: string]: any } = {
    'SBIN0000123': { bank: 'State Bank of India', branch: 'Mumbai Main Branch', address: 'Mumbai Main Branch, Mumbai', city: 'Mumbai', state: 'Maharashtra', district: 'Mumbai', contact: '022-22029456' },
    'HDFC0000123': { bank: 'HDFC Bank', branch: 'Delhi Connaught Place', address: 'Connaught Place, New Delhi', city: 'New Delhi', state: 'Delhi', district: 'New Delhi', contact: '011-23456789' },
    'ICIC0000123': { bank: 'ICICI Bank', branch: 'Bangalore MG Road', address: 'MG Road, Bangalore', city: 'Bangalore', state: 'Karnataka', district: 'Bangalore', contact: '080-25501234' },
    'AXIS0000123': { bank: 'Axis Bank', branch: 'Chennai Anna Salai', address: 'Anna Salai, Chennai', city: 'Chennai', state: 'Tamil Nadu', district: 'Chennai', contact: '044-28521234' },
    'KOTAK0123': { bank: 'Kotak Mahindra Bank', branch: 'Kolkata Park Street', address: 'Park Street, Kolkata', city: 'Kolkata', state: 'West Bengal', district: 'Kolkata', contact: '033-22251234' },
    'YESB0000123': { bank: 'Yes Bank', branch: 'Hyderabad Banjara Hills', address: 'Banjara Hills, Hyderabad', city: 'Hyderabad', state: 'Telangana', district: 'Hyderabad', contact: '040-23451234' }
  }

  const lookupIFSC = async () => {
    if (!ifscCode.trim() || ifscCode.length !== 11) return

    setLoading(true)
    
    // Simulate API call delay
    setTimeout(() => {
      const cleanIFSC = ifscCode.trim().toUpperCase()
      const ifscData = mockIFSCData[cleanIFSC]
      
      if (ifscData) {
        setResult({
          ifsc: cleanIFSC,
          bank: ifscData.bank,
          branch: ifscData.branch,
          address: ifscData.address,
          city: ifscData.city,
          state: ifscData.state,
          district: ifscData.district,
          contact: ifscData.contact
        })
      } else {
        // Generate mock data for unknown IFSC codes
        const banks = ['State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak Mahindra Bank', 'Yes Bank', 'Punjab National Bank', 'Bank of Baroda']
        const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad']
        const states = ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'West Bengal', 'Telangana', 'Gujarat', 'Rajasthan']
        const districts = ['Mumbai', 'New Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad']
        
        const randomBank = banks[Math.floor(Math.random() * banks.length)]
        const randomCity = cities[Math.floor(Math.random() * cities.length)]
        const randomState = states[Math.floor(Math.random() * states.length)]
        const randomDistrict = districts[Math.floor(Math.random() * districts.length)]
        
        setResult({
          ifsc: cleanIFSC,
          bank: randomBank,
          branch: `${randomCity} Main Branch`,
          address: `Main Branch, ${randomCity}`,
          city: randomCity,
          state: randomState,
          district: randomDistrict,
          contact: `0${Math.floor(Math.random() * 9) + 1}${Math.floor(Math.random() * 90000000) + 10000000}`
        })
      }
      
      setLoading(false)
    }, 1200)
  }

  const formatIFSC = (value: string) => {
    // Remove non-alphanumeric characters and convert to uppercase
    const cleaned = value.replace(/[^A-Z0-9]/gi, '').toUpperCase()
    // Limit to 11 characters
    return cleaned.slice(0, 11)
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          🏦 Find bank details using IFSC code
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Enter an 11-character IFSC code (e.g., SBIN0000123)
        </p>
      </div>

      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter IFSC code (e.g., SBIN0000123)"
          value={ifscCode}
          onChange={(e) => setIfscCode(formatIFSC(e.target.value))}
          onKeyPress={(e) => e.key === 'Enter' && lookupIFSC()}
          className="flex-1 font-mono"
          maxLength={11}
        />
        <Button 
          onClick={lookupIFSC}
          disabled={loading || ifscCode.length !== 11}
        >
          {loading ? "Searching..." : "Find Bank"}
        </Button>
      </div>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🏦 IFSC: {result.ifsc}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Bank:</span>
                    <span className="font-semibold">{result.bank}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Branch:</span>
                    <span className="font-semibold">{result.branch}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">City:</span>
                    <span className="font-semibold">{result.city}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">State:</span>
                    <span className="font-semibold">{result.state}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">District:</span>
                    <span className="font-semibold">{result.district}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Contact:</span>
                    <span className="font-semibold">{result.contact}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Address:</strong> {result.address}
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-lg">
                <div className="text-sm text-blue-800 dark:text-blue-200">
                  💡 This is demo data. For accurate IFSC information, use RBI's official database or bank APIs.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
