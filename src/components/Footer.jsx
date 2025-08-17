import logo from "../assets/img/logo.png";
function Footer() {
  return (
    <footer class="bg-neutral-950 py-16">
      <div class="custom-container grid grid-rows-3 gap-3 justify-items-center text-white text-center">
        <div>
          <a href="#">
            <img
              src={logo}
              alt="logo"
              class="h-16 rounded-full border-2 border-neutral-950"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
