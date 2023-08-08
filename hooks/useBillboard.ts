import React from 'react'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

export const useBillboard = () => {
  
    const { data, error, isLoading } = useSWR('/api/random', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })

    return {
        data,
        error,
        isLoading
    }

}

export default useBillboard;