import React from 'react'

const Transaction = ({ sig, slot, confirmationStatus }: any) => {
  return (
    <div className='flex  items-center p-2'>
      <p className='flex-[0.6] text-xm font-extralight overflow-hidden px-2'>
        <a
          href={`https://explorer.solana.com/tx/${sig}`}
          className='text-tertiary'
          target='_blank'
        >
          {sig.substring(0, 56) + '...'}
        </a>
      </p>
      <p className='flex-[0.3] p-2 text-sm'>
        <a href={`https://explorer.solana.com/block/${slot}`} target='_blank'>
          {slot.toString().substring(0, 3) +
            ' ,' +
            slot.toString().substring(3, 6) +
            ' ,' +
            slot.toString().substring(6, 9)}
        </a>
      </p>
      <p className='flex-[0.3]'>
        {confirmationStatus === 'finalized' ? (
          <span className='bg-[#17B978]  px-2 p-1 rounded-full text-sm font-light'>
            Success
          </span>
        ) : (
          <span className='bg-[#B80000]  px-2 p-1 rounded-full text-sm font-light'>
            Failed
          </span>
        )}
      </p>
    </div>
  )
}

export default Transaction
