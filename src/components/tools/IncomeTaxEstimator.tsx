import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function IncomeTaxEstimator() {
  const [annualIncome, setAnnualIncome] = useState('')
  const [age, setAge] = useState('')
  const [result, setResult] = useState<{
    taxableIncome: number
    tax: number
    cess: number
    totalTax: number
    effectiveRate: number
    oldRegime: number
    newRegime: number
  } | null>(null)

  const calculateTax = () => {
    const income = parseFloat(annualIncome)
    const userAge = parseInt(age)

    if (income <= 0 || userAge <= 0) return

    // Standard deduction
    const standardDeduction = 50000
    const taxableIncome = Math.max(0, income - standardDeduction)

    // Old Tax Regime (FY 2023-24)
    let oldTax = 0
    if (taxableIncome <= 250000) {
      oldTax = 0
    } else if (taxableIncome <= 500000) {
      oldTax = (taxableIncome - 250000) * 0.05
    } else if (taxableIncome <= 1000000) {
      oldTax = 12500 + (taxableIncome - 500000) * 0.20
    } else {
      oldTax = 112500 + (taxableIncome - 1000000) * 0.30
    }

    // New Tax Regime (FY 2023-24)
    let newTax = 0
    if (taxableIncome <= 300000) {
      newTax = 0
    } else if (taxableIncome <= 600000) {
      newTax = (taxableIncome - 300000) * 0.05
    } else if (taxableIncome <= 900000) {
      newTax = 15000 + (taxableIncome - 600000) * 0.10
    } else if (taxableIncome <= 1200000) {
      newTax = 45000 + (taxableIncome - 900000) * 0.15
    } else if (taxableIncome <= 1500000) {
      newTax = 90000 + (taxableIncome - 1200000) * 0.20
    } else {
      newTax = 150000 + (taxableIncome - 1500000) * 0.30
    }

    // Health and Education Cess (4%)
    const oldCess = oldTax * 0.04
    const newCess = newTax * 0.04

    const oldTotalTax = oldTax + oldCess
    const newTotalTax = newTax + newCess

    // Use the lower of the two regimes
    const finalTax = Math.min(oldTotalTax, newTotalTax)
    const finalCess = finalTax === oldTotalTax ? oldCess : newCess
    const finalTaxAmount = finalTax - finalCess

    setResult({
      taxableIncome,
      tax: finalTaxAmount,
      cess: finalCess,
      totalTax: finalTax,
      effectiveRate: (finalTax / income) * 100,
      oldRegime: oldTotalTax,
      newRegime: newTotalTax
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          💰 Estimate your income tax liability for FY 2023-24
        </p>
        <p className="text-xs text-gray-500 mt-1">
          This is an estimate. Consult a tax advisor for accurate calculations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Annual Income (₹)</label>
          <Input
            type="number"
            placeholder="500000"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(e.target.value)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Age (years)</label>
          <Input
            type="number"
            placeholder="30"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>

      <Button 
        onClick={calculateTax}
        className="w-full"
        disabled={!annualIncome || !age}
      >
        Calculate Tax
      </Button>

      {result && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tax Calculation Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Annual Income:</span>
                      <span className="font-semibold">{formatCurrency(parseFloat(annualIncome))}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Standard Deduction:</span>
                      <span className="font-semibold">{formatCurrency(50000)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Taxable Income:</span>
                      <span className="font-semibold">{formatCurrency(result.taxableIncome)}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Tax Amount:</span>
                      <span className="font-semibold">{formatCurrency(result.tax)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Cess (4%):</span>
                      <span className="font-semibold">{formatCurrency(result.cess)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Tax:</span>
                      <span className="text-red-600">{formatCurrency(result.totalTax)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {result.effectiveRate.toFixed(2)}%
                    </div>
                    <div className="text-sm text-blue-800 dark:text-blue-200">
                      Effective Tax Rate
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-sm font-medium mb-2">Old Tax Regime</div>
                    <div className="text-lg font-bold">{formatCurrency(result.oldRegime)}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-sm font-medium mb-2">New Tax Regime</div>
                    <div className="text-lg font-bold">{formatCurrency(result.newRegime)}</div>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900 p-3 rounded-lg">
                  <div className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Disclaimer:</strong> This is a simplified tax calculation. 
                    Actual tax may vary based on deductions, exemptions, and other factors. 
                    Consult a tax advisor for accurate calculations.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
