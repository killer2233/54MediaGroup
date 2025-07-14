// components/TestimonialsSection.tsx
'use client'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Kathryn Calhoun',
      title: 'Entrepreneur & Coach',
      quote:
        'Thanks for inviting me to talk on Focus on Success. What a fabulous podcast! You’re a wonderful interviewer and it was a pleasure to work with you and your awesome team.',
    },
    {
      name: 'Mary Hager',
      title: 'Hager College Consulting',
      quote:
        'I recently had the great pleasure of spending time with Fawyza Khosti as a guest on her radio show... Her thoughtful and easy demeanor allowed me to present information to assist student and families optimize the college and scholarship application process.',
    },
    {
      name: 'Matthew Huffhines',
      title: 'Inspire Services AZ',
      quote:
        'Being on the radio show Focus on Success was a great experience and exposure for our company! Fawzya is an amazing host that provides good conversation and a wealth of information to her listeners.',
    },
    {
      name: 'Christine Driscoll',
      title: 'Rosewood Center for Eating Disorders',
      quote:
        'Thank you for the opportunity to be a guest on your show. It was a great experience. You are very easy to speak with and you asked excellent questions that helped the conversation flow smoothly.',
    },
    {
      name: 'Linda Yoonjin',
      title: 'Brain Education TV',
      quote:
        'Being on Fawzya’s show was so awesome for me. First of all I appreciate so much Fawzya’s professionalism... she covers important and relevant topics that people need at this time.',
    },
    {
      name: 'Greg Hammer, MD',
      title: 'Stanford University Medical Center',
      quote:
        'Thanks for inviting to participate in your program. I enjoyed it. You have a terrific show! I’d be happy to join you again going forward.',
    },
    {
      name: 'Patti Hulet',
      title: 'Coach, Author, and Teacher of The Year',
      quote:
        'Thank you for the opportunity to be on your radio show and share my recovery journey from a traumatic brain injury. With your help I now can create and, again, make a difference in the lives of other people.',
    },
    {
      name: 'L.L. Standage',
      title: 'Author',
      quote:
        'Being on the show with Fawzya was a wonderful experience. I felt very at ease and we never ran out of things to talk about.',
    },
    {
      name: 'Bonnie J. Kaplan, PhD',
      title: 'Cumming School of Medicine, University of Calgary',
      quote:
        'It is always delightful to be interviewed by someone who has really done her preparation well. She has a lovely, informal style, while truly getting to the central importance of the topic.',
    },
    {
      name: 'Geraldine Mair',
      title: 'Author & Wellness Advocate',
      quote:
        'Fawzya is a very warm and encouraging host, with an array of knowledge and experience in her field. It is a very professional show that helped me to be more visible to the audience I am trying to reach.',
    },
    {
      name: 'Rebecca Clark',
      title: 'Advisor, Strategist, Podcaster',
      quote:
        'It’s always a pleasure to work with Fawzya. She brings a vast amount of knowledge and expertise to her work... I highly recommend that you listen to her show, enjoy her wisdom, and reach out to connect.',
    },
    {
      name: 'Sherry Eklund',
      title: 'Founder of Teen Strong',
      quote:
        'It has been a privilege to be a return guest on the Focus on Success show with Fawzya Khosti. Fawzya makes each interview engaging as well as informational.',
    },
    {
      name: 'Scott LaPierre',
      title: 'Pastor & Author',
      quote:
        'Fawzya wants to see you be successful! It is a blessing to work with her. Her knowledge and professionalism, as well as the expertise of her guests, make her show stand out.',
    },
    {
      name: 'Mark Sutter',
      title: 'Founder of Sales Impact Advisors LLC',
      quote:
        'I really appreciated my experience with Fawzya Khosti. I really like her purpose around the show and the set up and execution is so professional.',
    },
    {
      name: 'Angilie Kapoor',
      title: 'Founder of Oversight Global',
      quote:
        'I had the pleasure of being a guest on the Focus on Success podcast hosted by Fawzya Khosti, and it was truly a phenomenal experience... I highly recommend the Focus on Success podcast.',
    },
    {
      name: 'I.S.',
      title: 'Licensed Therapist',
      quote:
        'The easy conversation between the host and Patti made it a pleasant podcast to listen to. The interesting information gave the listener hope for whatever struggles they are facing.',
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 text-center py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
        What Listeners Are Saying
      </h2>
      <div className="grid md:grid-cols-2 gap-8 text-left">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg"
          >
            <h4 className="font-semibold text-xl text-black-800">{t.name}</h4>
            <p className="text-sm text-gray-500 mb-2">{t.title}</p>
            <p className="text-gray-700">“{t.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  )
}
