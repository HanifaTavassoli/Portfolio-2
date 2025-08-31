export function Profile({ profile, name, message, title }) {
  return (
    <>
      <img
        src={profile}
        alt="Hanifa"
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover rounded-full mx-auto mb-6 sm:mb-8"
      />
      <div className="mb-[48px] text-neutral-800 dark:text-gray-200">
        <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
          Hi, I am
          <span className="text-sky-500 mx-2">{name}</span>
          {message}
        </h3>
        <h1 className=" text-2xl  mb-10 sm:text-3xl md:text-4xl font-bold">
          {title}
        </h1>
      </div>
    </>
  );
}
