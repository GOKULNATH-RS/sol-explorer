import React from 'react'
import Transaction from './Transaction'
import { space } from 'postcss/lib/list'

const Results = ({ result, address }: any) => {
  return (
    <div className='w-full flex flex-col gap-8'>
      <div className=' bg-secondary w-full flex flex-col justify-between rounded-lg p-4'>
        <h2 className='text-3xl font-bold mb-4 text-[#DCF2F1]'>Overview</h2>
        <div className='my-6 flex flex-col gap-2'>
          <div className='flex justify-between'>
            <p className='font-semibold'>Address</p>
            <p className='font-light text-sm'>{address}</p>
          </div>
          <div className='flex justify-between'>
            <p className='font-semibold'>Balance (SOL)</p>
            <p className='font-light text-sm'>
              ◎{result?.accInfo.result.value.lamports / 1000000000}
            </p>
          </div>
          <div className='flex justify-between'>
            <p className='font-semibold'>Allocated Data Size</p>
            <p className='font-light text-sm'>
              {result?.accInfo.result.value.space} byte(s)
            </p>
          </div>
          <div className='flex justify-between'>
            <p className='font-semibold'>Assigned Program Id</p>
            <p className='font-light text-sm'>
              {result?.accInfo.result.value.owner}
            </p>
          </div>
          <div className='flex justify-between'>
            <p className='font-semibold'>Executable</p>
            <p className='font-light text-sm'>
              {result?.accInfo.result.value.executable ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col bg-secondary rounded-lg overflow-x-scroll no-scrollbar border-[2px] border-primary border-opacity-55'>
        <div className='text-xl font-bold'>
          <h1 className='m-4'>Transaction History</h1>
        </div>
        <div className='flex bg-primary p-4'>
          <p className='flex-[0.6] p-2'>Transaction Signature</p>
          <p className='flex-[0.3] p-2'>Block</p>
          <p className='flex-[0.3] p-2'>RESULT</p>
        </div>

        {result?.transactions.map((transaction: any, index: number) => {
          return (
            <Transaction
              key={index}
              sig={transaction.signature}
              slot={transaction.slot}
              confirmationStatus={transaction.confirmationStatus}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Results
