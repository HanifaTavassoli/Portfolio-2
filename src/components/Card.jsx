function Card({ image, name, description, liveUrl, codeLink, featured }) {
  return (
    <>
      <div class="bg-neutral-800 rounded-sm overflow-hidden w-full max-w-[320px]">
        <a href={liveUrl} class="">
          <img
            src={image}
            alt="{name} project"
            class="transition-transform duration-500 hover:scale-105"
          />
        </a>
        <div class="text-start p-5">
          <h3 class="text-xl font-bold mb-2">{name}</h3>
          <div class="flex flex-row mb-4 gap-3">
            <img src="img/skills/html-5.svg" alt="html logo" class="w-7" />
            <img src="img/skills/css-3.svg" alt="css-3 logo" class="w-7" />
            <img src="img/skills/js.svg" alt="js logo" class="w-7" />
          </div>
          <p class="mb-8">{description}</p>
          <div class="flex flex-wrap sm:flex-nowrap sm:flex-row gap-4 items-center justify-center text-sm">
            <a
              href={codeLink}
              target="_blank"
              class="px-8 py-2 rounded-xs bg-slate-700 text-sky-500 hover:bg-slate-900"
            >
              <i class="fa-brands fa-github"></i> Github
            </a>
            <a
              href={liveUrl}
              target="_blank"
              class="px-8 py-2 rounded-sm bg-slate-700 text-sky-500 hover:bg-slate-900"
            >
              <i class="fa fa-link"></i>
              Visit
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
