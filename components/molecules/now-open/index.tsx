import React, { useEffect } from "react";
import clsx from "clsx";
import useSlackStore from "store/slack-store";
import useVisitor from "hooks/use-visitor";
import useSlack from "hooks/use-slack";

const NowOpen = () => {
  const { sendMessageToSlack } = useSlack();
  const { slackValue } = useSlackStore();
  const { visitorInformation } = useVisitor();

  useEffect(() => {
    if (!slackValue && visitorInformation) {
      sendMessageToSlack(JSON.stringify(visitorInformation));
    }
  }, [slackValue, visitorInformation, sendMessageToSlack]);

  return (
    <section className="pt-[56px] pb-4" aria-label="Öffnungszeiten">
      <div className="flex items-center gap-3">
        <span className="relative flex w-4 h-4">
          <span
            className={clsx(
              "bg-green-500",
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            )}
          ></span>
          <span
            className={clsx(
              "bg-green-500",
              "relative inline-flex rounded-full h-4 w-4"
            )}
          ></span>
        </span>
        <p
          className={clsx("text-green-500")}
          itemProp="openingHours"
          content="Mo-Su 00:00-23:59"
          aria-label="Jetzt geöffnet"
        >
          Jetzt geöffnet
        </p>
      </div>
    </section>
  );
};

export default NowOpen;
