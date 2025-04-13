import InterviewCard from '@/components/InterviewCard';
import { Button } from '@/components/ui/button';
import { dummyInterviews } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <>
      <section className='card-cta'>
           <div className='flex flex-col gap-6 max-w-lg'>
              <h2>Get Interview Ready with AI-Powered Practice & Feedback</h2>
           <p className='text-lg'>
            Get instant feedback on your responses and improve your chances of acing your next interview.
           </p>
           <Button asChild className='btn-primary max-sm:w-full'>
            <Link href='/interview'>Start Practicing</Link>
           </Button>
           </div>

           <section>
            <Image src='/robot.png' alt='robot' width={400} height={400} className='max-sm:hidden' />
           </section>
      </section>

     <section className='flex flex-col gap-6 mt-8'>
       <h2 className=''>Your Interviews</h2>

       <div className="interviews-section">
        {dummyInterviews.map((interview) => (
          <InterviewCard {... interview} key={interview.id} />
        ))}


        {/* <>Your haven&apos;t taken any interviews yet</> */}
       </div>
     </section>

     <section className='flex flex-col gap-6 mt-8'>
       <h2>Take an Interview</h2>

       <div className='interviews-section'>
       {dummyInterviews.map((interview) => (
          <InterviewCard {... interview} key={interview.id} />
        ))}
       </div>
     </section>
    </>
  )
}

export default page;