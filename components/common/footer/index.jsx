// Components
import { MenuBtn } from "@/components/common/nav";

// Icons
import { SiDiscord, SiTwitter } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <div className="relative w-full h-screen max-h-[40vh] bg-orange p-8 flex flex-col space-y-20">
        <div className="flex flex-row justify-between w-full">
          {/* Left */}
          <span className="flex flex-col space-y-2">
            <span>
              <a
                className="underline underline-offset-3 text-2xl font-light neutra-book"
                href="mailto:Info@hddenforms.com"
              >
                Info@hddenforms.com
              </a>
            </span>
            <span>
              <Links />
            </span>
          </span>
          {/* Right */}
          <span className="flex flex-row space-x-6">
            {/* <button
              className="text-black hover:text-red duration-300 easeInOut"
              onClick={() => router.push("https://discord.me/hddenforms")}
            >
              <SiDiscord size={40} />
            </button> */}
            <a
              className="text-black mt-10"
              href="https://twitter.com/HddenForms"
              target="new"
            >
              <SiTwitter size={40} />
            </a>
          </span>
        </div>
        <div className="flex h-full flex-col items-end justify-center md:justify-end">
          <span className="neutra-book font-light text-lg">
            © HDDEN FORMS — All Rights Reseved.
          </span>
        </div>
      </div>
    </>
  );
};

const Links = () => {
  return (
    <>
      <span className="flex flex-col space-y-2 items-start md:space-y-0 md:flex-row md:space-x-6 md:justify-start">
        {LinkData.map((footer, index) => {
          return (
            <a
              key={index}
              className="text-xl font-light neutra-book"
              href={footer.url}
            >
              {footer.name}
            </a>
          );
        })}
      </span>
    </>
  );
};

const LinkData = [
  {
    url: "http://hddenformswebsite.metodika.com.mx/terms-conditions.php",
    name: "Terms of Use",
  },
  {
    url: "http://hddenformswebsite.metodika.com.mx/privacy-policy.php",
    name: "Privacy Policy",
  },
  {
    url: "http://hddenformswebsite.metodika.com.mx/cookie-policy.php",
    name: "Cookie Policy",
  },
  {
    url: "http://hddenformswebsite.metodika.com.mx/contact-us.php",
    name: "Contact",
  },
];

export default Footer;
