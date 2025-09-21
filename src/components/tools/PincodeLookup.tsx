import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function PincodeLookup() {
  const [pincode, setPincode] = useState('')
  const [result, setResult] = useState<{
    pincode: string
    city: string
    state: string
    district: string
    region: string
    officeType: string
    deliveryStatus: string
  } | null>(null)
  const [loading, setLoading] = useState(false)

  // Mock pincode data for demonstration
  const mockPincodeData: { [key: string]: any } = {
    '400001': { city: 'Mumbai', state: 'Maharashtra', district: 'Mumbai', region: 'Mumbai', officeType: 'Head Post Office', deliveryStatus: 'Deliverable' },
    '110001': { city: 'New Delhi', state: 'Delhi', district: 'New Delhi', region: 'Delhi', officeType: 'Head Post Office', deliveryStatus: 'Deliverable' },
    '560001': { city: 'Bangalore', state: 'Karnataka', district: 'Bangalore', region: 'Bangalore', officeType: 'Head Post Office', deliveryStatus: 'Deliverable' },
    '600001': { city: 'Chennai', state: 'Tamil Nadu', district: 'Chennai', region: 'Chennai', officeType: 'Head Post Office', deliveryStatus: 'Deliverable' },
    '700001': { city: 'Kolkata', state: 'West Bengal', district: 'Kolkata', region: 'Kolkata', officeType: 'Head Post Office', deliveryStatus: 'Deliverable' },
    '500001': { city: 'Hyderabad', state: 'Telangana', district: 'Hyderabad', region: 'Hyderabad', officeType: 'Head Post Office', deliveryStatus: 'Deliverable' },
    '411001': { city: 'Pune', state: 'Maharashtra', district: 'Pune', region: 'Pune', officeType: 'Head Post Office', deliveryStatus: 'Deliverable' },
    '380001': { city: 'Ahmedabad', state: 'Gujarat', district: 'Ahmedabad', region: 'Ahmedabad', officeType: 'Head Post Office', deliveryStatus: 'Deliverable' },
    '302001': { city: 'Jaipur', state: 'Rajasthan', district: 'Jaipur', region: 'Jaipur', officeType: 'Head Post Office', deliveryStatus: 'Deliverable' },
    '110002': { city: 'New Delhi', state: 'Delhi', district: 'New Delhi', region: 'Delhi', officeType: 'Sub Post Office', deliveryStatus: 'Deliverable' }
  }

  const lookupPincode = async () => {
    if (!pincode.trim() || pincode.length !== 6) return

    setLoading(true)
    
    // Simulate API call delay
    setTimeout(() => {
      const cleanPincode = pincode.trim()
      const pincodeData = mockPincodeData[cleanPincode]
      
      if (pincodeData) {
        setResult({
          pincode: cleanPincode,
          city: pincodeData.city,
          state: pincodeData.state,
          district: pincodeData.district,
          region: pincodeData.region,
          officeType: pincodeData.officeType,
          deliveryStatus: pincodeData.deliveryStatus
        })
      } else {
        // Generate mock data for unknown pincodes
        const states = ['Maharashtra', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'West Bengal', 'Kerala']
        const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad']
        const districts = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad']
        const regions = ['Central', 'North', 'South', 'East', 'West']
        const officeTypes = ['Sub Post Office', 'Branch Post Office', 'Head Post Office']
        
        const randomState = states[Math.floor(Math.random() * states.length)]
        const randomCity = cities[Math.floor(Math.random() * cities.length)]
        const randomDistrict = districts[Math.floor(Math.random() * districts.length)]
        const randomRegion = regions[Math.floor(Math.random() * regions.length)]
        const randomOfficeType = officeTypes[Math.floor(Math.random() * officeTypes.length)]
        
        setResult({
          pincode: cleanPincode,
          city: randomCity,
          state: randomState,
          district: randomDistrict,
          region: randomRegion,
          officeType: randomOfficeType,
          deliveryStatus: 'Deliverable'
        })
      }
      
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          📍 Find location details using Indian postal pincode
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Enter a 6-digit pincode to get location information
        </p>
      </div>

      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter 6-digit pincode (e.g., 400001)"
          value={pincode}
          onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
          onKeyPress={(e) => e.key === 'Enter' && lookupPincode()}
          className="flex-1"
          maxLength={6}
        />
        <Button 
          onClick={lookupPincode}
          disabled={loading || pincode.length !== 6}
        >
          {loading ? "Searching..." : "Lookup"}
        </Button>
      </div>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📍 Pincode: {result.pincode}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">City:</span>
                    <span className="font-semibold">{result.city}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">State:</span>
                    <span className="font-semibold">{result.state}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">District:</span>
                    <span className="font-semibold">{result.district}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Region:</span>
                    <span className="font-semibold">{result.region}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Office Type:</span>
                    <span className="font-semibold">{result.officeType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Delivery Status:</span>
                    <span className={`font-semibold ${result.deliveryStatus === 'Deliverable' ? 'text-green-600' : 'text-red-600'}`}>
                      {result.deliveryStatus}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-lg">
                <div className="text-sm text-blue-800 dark:text-blue-200">
                  💡 This is demo data. For accurate pincode information, use India Post's official API or database.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
