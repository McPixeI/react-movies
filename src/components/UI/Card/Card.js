function Card ({ children }) {
  return (
    <div class='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <a href='#'>{children}</a>
    </div>
  )
}

function CardHeading ({ children }) {
  return (
    <>
      <img class='rounded-t-lg' src='https://via.placeholder.com/400' alt='' />
      {children}
    </>
  )
}

function CardBody ({ children }) {
  return (
    <div class='p-5'>
      <a href='#'>
        <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Noteworthy technology acquisitions 2021
        </h5>
      </a>
      <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      {children}
    </div>
  )
}

export { Card, CardHeading, CardBody }
