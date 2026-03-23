import { useEffect, useState } from "react";

const ROLES = ["Full-stack Developer", "Graphic ", "Web "];

const SpiderManMask = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const doneTyping = typedText === currentRole;
    const doneDeleting = typedText === "";

    let timeout = 90;
    if (doneTyping && !isDeleting) timeout = 1400;
    if (isDeleting) timeout = 45;

    const timer = setTimeout(() => {
      if (!isDeleting && !doneTyping) {
        setTypedText(currentRole.slice(0, typedText.length + 1));
        return;
      }

      if (!isDeleting && doneTyping) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && !doneDeleting) {
        setTypedText(currentRole.slice(0, typedText.length - 1));
        return;
      }

      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, timeout);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section className="relative h-full w-full overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.08),transparent_55%),radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.98),rgba(255,255,255,0.85),rgba(255,255,255,0.98))]" />
      </div>

      <div className="relative  mt-35 mx-auto flex h-full w-full max-w-1xl flex-col items-center  pt-10 md:pt-40">
        <p className="text-center text-xs font-medium tracking-[0.22em] text-black/110 md:text-sm">
          WELCOME TO MY · PORTFOLIO     </p>

        <div className="relative mt-10 flex w-full flex-1 items-center justify-center">
          <div className="relative h-full w-full">
            <div className="pointer-events-none absolute left-1/2 top-4 w-full max-w-[1180px] -translate-x-1/2 px-2 text-center md:top-6">
              <h1 className="font-black tracking-[-0.05em] text-[clamp(80px,11.5vw,136px)] leading-[0.82] text-black">
                Dheeraj Salaskar
              </h1>
              <h2
                className="mx-auto mt-6 max-w-[1180px] font-black tracking-[-0.05em] text-transparent leading-[0.86] text-[clamp(30px,6.2vw,90px)] md:whitespace-nowrap -translate-x-7"
                style={{ WebkitTextStroke: "2px rgba(0,0,0,0.55)" }}
              >
                {typedText}
                <span className="inline-block w-[0.15em] animate-pulse text-black/70">
                  |
                </span>
              </h2>
              <h2
                className="mx-auto mt-3 max-w-[1180px] font-black tracking-[-0.05em] text-transparent leading-[0.86] text-[clamp(60px,6.2vw,120px)] md:whitespace-nowrap -translate-x-7"
                style={{ color: "black" }}
              >
                Designer
              </h2>
            </div>

            <div className="absolute bottom-0 left-1/2 w-[min(640px,92vw)] -translate-x-1/2 md:w-[min(760px,86vw)]">
            
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-[linear-gradient(to_top,rgba(255,255,255,1),rgba(255,255,255,0))]" />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-30 flex flex-col items-center justify-center text-black/70">
        <p className="text-xs  mb-5 font-semibold tracking-[0.28em] md:text-sm">
          SCROLL DOWN
        </p>
        <div className="mt-1  mb-20 flex h-14 w-8 items-start justify-center rounded-full border-2 border-black/50 p-1.5">
          <span className="h-3 w-3 animate-bounce rounded-full bg-black/70" />
        </div>
      </div>
    </section>
  );
};

export default SpiderManMask;
